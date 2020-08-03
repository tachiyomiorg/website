<template>
	<span v-if="fileName" class="fileNameContainer" title="File name">
		<MaterialIcon class="fileNameIcon" icon-name="get_app" />
		<span class="fileName">tachiyomi-v{{ this.$data.tagName }}.apk</span>
		<slot />
	</span>
	<span v-else class="downloadTag">{{ this.$data.tagName }}</span>
</template>

<script>
import axios from "axios";
import { GITHUB_LATEST_API } from "../constants";

export default {
	props: {
		fileName: {
			type: Boolean,
		},
	},

	data() {
		return {
			tagName: "0.0.0",
		};
	},

	async mounted() {
		const { data } = await axios.get(GITHUB_LATEST_API);
		this.$data.tagName = data.tag_name.slice(1);
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
