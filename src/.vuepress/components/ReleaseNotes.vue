<template>
	<div class="releaseNotes">{{ this.$data.releaseNotes }}</div>
</template>

<script>
import axios from "axios";

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
		this.$data.releaseNotes = data.body;
	},
};
</script>

<style lang="stylus" scoped>
.releaseNotes
	white-space pre-line
</style>
