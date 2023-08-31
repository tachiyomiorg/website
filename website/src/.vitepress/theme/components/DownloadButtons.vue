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
		tagName: previewRelease.value?.tag_name || "0.00.0",
		asset: (previewRelease.value?.assets ?? [])
			.find(a => /^tachiyomi-r\d{4,}.apk/.test(a.name)),
	},
	stable: {
		tagName: stableRelease.value?.tag_name?.slice(1) || "r0000",
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
	<div v-else class="download-buttons">
		<a class="download-button primary" :download="downloadInformation.stable.asset?.name" :href="downloadInformation.stable.asset?.browser_download_url">
			<IconDownload />
			<span class="text">Stable</span>
			<span class="version">{{ downloadInformation.stable.tagName }}</span>
		</a>
		<a class="download-button secondary" :download="downloadInformation.preview.asset?.name" :href="downloadInformation.preview.asset?.browser_download_url">
			<IconDownload />
			<span class="text">Preview</span>
			<span class="version">{{ downloadInformation.preview.tagName }}</span>
		</a>
	</div>
	<span class="version-disclaimer">
		Requires <strong>Android 6.0</strong> or higher.
	</span>
</template>

<style lang="stylus">
.download-buttons {
	display: flex
	gap: 0.75em
	justify-content: center
	align-items: center
	margin: 0.75em auto
}

.download-button {
	display: inline-block
	border: 1px solid transparent
	text-align: center
	font-weight: 600
	white-space: nowrap
	transition: color 0.25s, border-color 0.25s, background-color 0.25s
	cursor: pointer
	transition: all 0.3s ease
	border-radius: 20px
	padding: 0 20px
	line-height: 38px
	font-size: 14px

	&:hover {
		text-decoration: none !important
	}

	&.primary {
		border-color: var(--vp-button-brand-border)
		color: var(--vp-button-brand-text)
		background-color: var(--vp-button-brand-bg)

		&:hover {
			border-color: var(--vp-button-brand-hover-border)
			color: var(--vp-button-brand-hover-text)
			background-color: var(--vp-button-brand-hover-bg)
		}

		&:active {
			border-color: var(--vp-button-brand-active-border)
			color: var(--vp-button-brand-active-text)
			background-color: var(--vp-button-brand-active-bg)
		}
	}

	&.secondary {
		border-color: var(--vp-button-alt-border)
		color: var(--vp-button-alt-text)
		background-color: var(--vp-button-alt-bg)

		&:hover {
			border-color: var(--vp-button-alt-hover-border)
			color: var(--vp-button-alt-hover-text)
			background-color: var(--vp-button-alt-hover-bg)
		}

		&:active {
			border-color: var(--vp-button-alt-active-border)
			color: var(--vp-button-alt-active-text)
			background-color: var(--vp-button-alt-active-bg)
		}
	}

	svg {
		display: inline-block
		vertical-align: middle
		margin-right: 0.5em
	}

	.text {
		margin-right: 10px
	}

	.version {
		font-size: 12px
		margin-left: 10px
	}
}

.version-disclaimer {
	display: block
	text-align: center
	margin: 0.75em auto
	font-size: 0.75rem
}
</style>
