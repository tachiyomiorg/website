<template>
	<div v-html="releaseNotes" class="releaseNotes"></div>
</template>

<script>
import axios from "axios";
import marked from "marked";

// eslint-disable-next-line prettier/prettier
import { githubLatestApi } from "../constants";

export default {
	data() {
		return {
			releaseNotes: "",
		};
	},

	async mounted() {
		const { data } = await axios.get(githubLatestApi);
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
