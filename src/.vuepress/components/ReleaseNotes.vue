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
		const { error, data } = await this.$store.dispatch(
			"getStableReleaseData"
		);
		if (error) return;
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
