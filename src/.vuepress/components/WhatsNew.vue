<template>
	<div class="guide whatsNew">
		<p class="title">What's new</p>
		<div v-html="whatsNew"></div>
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
			whatsNew: "Failed to load data from GitHub.",
		};
	},

	async mounted() {
		const { data } = await axios.get(GITHUB_LATEST_API);
		this.$data.whatsNew = marked(data.body);
	},
};
</script>

<style lang="stylus">
.whatsNew
	.title
		text-align center
	div
		white-space
		h3
			font-size 1.1rem
</style>
