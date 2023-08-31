<script setup lang="ts">
import { computed } from "vue";
import useReleaseQuery from "../queries/useReleaseQuery";

const {
	data: stableRelease,
	isLoading: isLoadingStable,
	isError: isErrorStable,
	error: errorStable
} = useReleaseQuery("stable");

const {
	data: previewRelease,
	isLoading: isLoadingPreview,
	isError: isErrorPreview,
	error: errorPreview
} = useReleaseQuery("preview");

const downloadInformation = computed(() => ({
	preview: {
		tagName: previewRelease.value?.tag_name,
		asset: (previewRelease.value?.assets ?? [])
			.find(a => /^tachiyomi-r\d{4,}.apk/.test(a.name)),
	},
	stable: {
		tagName: stableRelease.value?.tag_name?.slice(1),
		asset: (stableRelease.value?.assets ?? [])
			.find(a => /^tachiyomi-v\d+\.\d+\.\d+.apk/.test(a.name)),
	}
}))
</script>

<template>
	<div v-if="isLoadingStable || isLoadingPreview">
		This is the fancy loading indicator
	</div>
	<div v-else-if="isErrorStable">
		This is the error message: {{ errorStable }}
	</div>
	<div v-else-if="isErrorPreview">
		This is the error message: {{ errorPreview }}
	</div>
	<div v-else>
		<div class="buttons-wrapper">
			<a
				:download="downloadInformation.stable.asset?.name"
				:href="downloadInformation.stable.asset?.browser_download_url"
			>
				<span>Stable</span>
				<span>{{ downloadInformation.stable.tagName }}</span>
			</a>
			<a
				:download="downloadInformation.preview.asset?.name"
				:href="downloadInformation.preview.asset?.browser_download_url"
			>
				<span>Preview</span>
				<span>{{ downloadInformation.preview.tagName }}</span>
			</a>
		</div>
		<p>
			Requires <strong>Android 6.0</strong> or higher.
		</p>
	</div>
</template>

<style lang="stylus">
.buttons-wrapper {
	display: flex
	gap: 2rem

	& > a {
		display: flex
		flex-direction: column
		align-items: center
	}
}
</style>
