<script>
import axios from "axios";
import groupBy from "lodash.groupby";
import { GITHUB_EXTENSION_JSON } from "../constants";
import { simpleLangName } from "../scripts/languages";
import ExtensionFilters from "./ExtensionFilters.vue";
import ExtensionList from "./ExtensionList.vue";

export default {
	components: { ExtensionList, ExtensionFilters },
	data() {
		return {
			extensions: [],
			filters: {
				search: "",
				lang: [],
				nsfw: "Don't care",
				sort: "Ascending",
			},
			loading: true,
			observer: null,
		};
	},
	computed: {
		filteredExtensions() {
			const { extensions, filters } = this;

			const filtered = [];

			for (const group of extensions) {
				let filteredGroup = filters.lang.length ? (filters.lang.includes(group[0].lang) ? group : []) : group;

				if (filters.search) {
					filteredGroup = filteredGroup.filter(
						(ext) =>
							ext.name.toLowerCase().includes(filters.search.toLowerCase()) ||
							ext.sources.some((source) => source.id.includes(filters.search))
					);
				}
				filteredGroup = filteredGroup.filter((ext) =>
					filters.nsfw === "Don't care" ? true : ext.nsfw === (filters.nsfw === "Yes" ? 1 : 0)
				);

				if (filters.sort && filters.sort === "Descending") {
					filteredGroup = filteredGroup.reverse();
				}
				if (filteredGroup.length) {
					filtered.push(filteredGroup);
				}
			}

			return filtered;
		},
	},
	async beforeMount() {
		const { data } = await axios.get(GITHUB_EXTENSION_JSON);
		const values = Object.values(groupBy(data, "lang"));
		values.sort(this.sortLanguages);
		this.$data.extensions = values;

		this.$nextTick(() => {
			this.loading = false;
		});
	},
	updated() {
		if (window.location.hash) {
			window.location.replace(window.location.hash);
		}
	},
	methods: {
		sortLanguages(a, b) {
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
		},
	},
};
</script>
<template>
	<div v-if="loading" v-loading.lock="loading" style="min-height: 200px"></div>
	<div v-else>
		<ExtensionFilters :extensions="extensions" @filters="filters = $event" />
		<ExtensionList :extensions="filteredExtensions" />
	</div>
</template>
