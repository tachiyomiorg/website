<template>
	<div v-html="releaseNotes" class="releaseNotes"></div>
</template>

<script>
import axios from "axios";
import marked from "marked";

const RELEASE_URL =
	"https://api.github.com/repos/inorichi/tachiyomi/releases/latest";

export default {
	data() {
		return {
			releaseNotes: "",
		};
	},

	async mounted() {
		const { data } = await axios.get(RELEASE_URL);
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
