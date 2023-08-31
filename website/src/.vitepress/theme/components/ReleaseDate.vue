<script setup lang="ts">
import { computed, toRefs } from "vue";
import moment from "moment";
import useReleaseQuery from "../queries/useReleaseQuery";
import type { ReleaseType } from "../queries/useReleaseQuery";

const props = defineProps<{ type: ReleaseType }>();
const { type } = toRefs(props);

const {	data: release, isLoading, isError } = useReleaseQuery(type);

const momentInfo = computed(() => {
	if (isLoading.value || isError.value || !release.value) {
		return {
			relative: "at an unknown time",
			exact: null,
			iso: null,
		};
	}

	return {
		relative: moment(release.value!.published_at).fromNow(),
		exact: moment(release.value!.published_at).format("dddd, MMMM Do YYYY [at] HH:mm"),
		iso: release.value!.published_at,
	}
})
</script>

<template>
	<time :datetime="momentInfo.iso">
		{{ momentInfo.relative }}
	</time>
</template>
