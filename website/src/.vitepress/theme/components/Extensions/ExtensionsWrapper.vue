<script setup lang="ts">
import groupBy from "lodash.groupby";
import { simpleLangName } from "../../../config/scripts/languages";
import ExtensionFilters from "./ExtensionFilters.vue";
import ExtensionList from "./ExtensionList.vue";
import useExtensionsRepositoryQuery from "../../queries/useExtensionsRepositoryQuery";
import { computed, onUpdated, ref } from 'vue';
import type { Extension } from "../../queries/useExtensionsRepositoryQuery";

const { data: extensions, isLoading } = useExtensionsRepositoryQuery();

const filters = ref({
	search: "",
	lang: [] as string[],
	nsfw: "Show all",
	sort: "Ascending",
});

function languageComparator(a: Extension[], b: Extension[]) {
	const langA = simpleLangName(a[0].lang);
	const langB = simpleLangName(b[0].lang);
	if (langA === "All" && langB === "English") {
		return -1;
	}
	if (langA === "English" && langB === "All") {
		return 1;
	}
	if (langA === "English") {
		return -1;
	}
	if (langB === "English") {
		return 1;
	}
	if (langA < langB) {
		return -1;
	}
	if (langA > langB) {
		return 1;
	}
	return 0;
}

const groupedExtensions = computed(() => {
	const values: Extension[][] = Object.values(groupBy(extensions.value, "lang"));
	values.sort(languageComparator)

	return values
})

const filteredExtensions = computed(() => {
	const filtered: Extension[][] = [];

	for (const group of groupedExtensions.value) {
		let filteredGroup = filters.value.lang.length
			? (filters.value.lang.includes(group[0].lang) ? group : [])
			: group;

		if (filters.value.search) {
			filteredGroup = filteredGroup.filter(
				(ext) =>
					ext.name.toLowerCase().includes(filters.value.search.toLowerCase()) ||
					ext.sources.some((source) => source.id.includes(filters.value.search))
			);
		}
		filteredGroup = filteredGroup.filter((ext) =>
			filters.value.nsfw === "Show all" ? true : ext.nsfw === (filters.value.nsfw === "NSFW" ? 1 : 0)
		);

		if (filters.value.sort && filters.value.sort === "Descending") {
			filteredGroup = filteredGroup.reverse();
		}
		if (filteredGroup.length) {
			filtered.push(filteredGroup);
		}
	}

	return filtered;
});

onUpdated(() => {
	if (window.location.hash) {
		window.location.replace(window.location.hash);
	}
});
</script>

<template>
	<ExtensionFilters :extensions="groupedExtensions" @filters="filters = $event" />
	<div class="loading" v-if="isLoading" v-loading.lock="isLoading" style="min-height: 200px"></div>
	<ExtensionList v-else :extensions="filteredExtensions" />
</template>
