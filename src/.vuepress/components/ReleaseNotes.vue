<template>
	<div v-html="releaseNotes" class="releaseNotes"></div>
</template>

<script>
import axios from "axios";
import marked from "marked";
import { GITHUB_LATEST_API } from "../constants";

export default {
	data() {
		return {
			releaseNotes: "",
		};
	},

	async mounted() {
		const { data } = await axios.get(GITHUB_LATEST_API);
		this.$data.releaseNotes = marked(data.body);
	},
};
</script>

<style lang="stylus">
.releaseNotes
	white-space
	h3
		font-size 1.1rem
</style>
