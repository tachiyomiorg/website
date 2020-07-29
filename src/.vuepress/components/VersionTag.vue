<template>
	<span v-if="fileName" class="fileNameContainer" title="File name">
		<MaterialIcon class="fileNameIcon" icon-name="get_app" />
		<span class="fileName">tachiyomi-{{ this.$data.tagName }}.apk</span>
		<slot />
	</span>
	<span v-else class="downloadTag">
		{{ this.$data.tagName }}
	</span>
</template>

<script>
export default {
	props: {
		fileName: {
			type: Boolean,
		},
	},

	data() {
		return {
			tagName: "",
		};
	},

	async mounted() {
		const { error, data } = await this.$store.dispatch(
			"getStableReleaseData"
		);
		if (error) return;
		// Set the values.
		this.$data.tagName = data.tag_name;
	},
};
</script>

<style lang="stylus" scoped>
.fileNameContainer
	white-space nowrap
	.fileNameIcon,
	.fileName
		color $accentColorSecondary
		font-weight 500
		font-size 1em
	.fileNameIcon
		vertical-align top
	&:hover
		cursor default
</style>
