<template>
	<div class="releaseNotes" v-html="releaseNotes"></div>
</template>

<script>
import marked from "marked";

export default {
	data() {
		return {
			releaseNotes: "",
		};
	},

	async mounted() {
		try {
			const { data } = await this.$store.dispatch("getStableReleaseData");
			this.$data.releaseNotes = marked(data.body);
		} catch (e) {
			console.error(e);
		}
	},
};
</script>

<style lang="stylus">
.releaseNotes
	white-space
	h3
		font-size 1.1rem
</style>
