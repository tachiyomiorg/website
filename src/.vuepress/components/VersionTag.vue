<template>
	<span v-if="stable" class="downloadTag">{{ this.$data.tagName }}</span>
	<span v-else-if="fileName" class="fileNameContainer" title="File name">
		<MaterialIcon class="fileNameIcon" icon="get_app" />
		<span class="fileName">tachiyomi-v{{ this.$data.tagName }}.apk</span>
		<slot />
	</span>
	<span v-else-if="preview" class="downloadTag">{{ this.$data.previewTagName }}</span>
	<span v-else-if="previewFileName" class="fileNameContainer" title="File name">
		<MaterialIcon class="fileNameIcon" icon="get_app" />
		<span class="fileName">tachiyomi-{{ this.$data.previewTagName }}.apk</span>
		<slot />
	</span>
	<span v-else>You need to specify props.</span>
</template>

<script>
/**
 * Code example: <VersionTag preview />
 */
export default {
	props: {
		stable: {
			type: Boolean,
			default: false,
		},
		fileName: {
			type: Boolean,
			default: false,
		},
		preview: {
			type: Boolean,
			default: false,
		},
		previewFileName: {
			type: Boolean,
			default: false,
		},
	},

	data() {
		return {
			tagName: "0.00.0",
			previewTagName: "r0000",
		};
	},

	async mounted() {
		try {
			const { data } = await this.$store.dispatch("getStableReleaseData");
			this.$data.tagName = data.tag_name.slice(1);
		} catch (e) {
			console.error(e);
		}
		try {
			const { data } = await this.$store.dispatch("getPreviewReleaseData");
			this.$data.previewTagName = data.tag_name;
		} catch (e) {
			console.error(e);
		}
	},
};
</script>

<style lang="stylus" scoped>
.fileNameContainer
	white-space nowrap
	.fileNameIcon,
	.fileName
		color #23638f
		font-weight 500
		font-size 1em
	.fileNameIcon
		vertical-align top
	&:hover
		cursor default
</style>
