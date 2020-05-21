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
import axios from "axios";

const RELEASE_URL =
	"https://api.github.com/repos/inorichi/tachiyomi/releases/latest";

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
		const { data } = await axios.get(RELEASE_URL);
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
