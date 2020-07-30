<template>
	<div class="guide changeLog">
		<p class="title">Changelog</p>
		<div v-html="changeLog"></div>
		<div class="custom-block aside">
			<p>
				View the full release
				<a href="https://github.com/inorichi/tachiyomi/releases/latest" target="_blank" rel="noopener">here</a>
			</p>
		</div>
	</div>
</template>

<script>
import axios from "axios";
import marked from "marked";
import { GITHUB_LATEST_API } from "../constants";

export default {
	data() {
		return {
			changeLog: "Attempting to load changelog from GitHub.",
		};
	},

	async mounted() {
		const { data } = await axios.get(GITHUB_LATEST_API);
		this.$data.changeLog = marked(data.body);
	},
};
</script>

<style lang="stylus">
.changeLog
	.title
		text-align center
	div
		white-space
		h3
			font-size 1.1rem
</style>
