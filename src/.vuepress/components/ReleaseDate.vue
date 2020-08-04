<template>
	<div class="buildTime">
		<span :title="releasePublishExact">{{ releasePublishRelative }}</span>
	</div>
</template>

<script>
export default {
	data() {
		return {
			releasePublishRelative: "at an unknown time",
			releasePublishExact: "Can't connect to GitHub.",
		};
	},

	async mounted() {
		try {
			const { data } = await this.$store.dispatch("getStableReleaseData");
			this.$data.releasePublishRelative = this.$moment(data.published_at).fromNow();
			this.$data.releasePublishExact = this.$moment(data.published_at).toString();
		} catch (e) {
			console.error(e);
		}
	},
};
</script>

<style lang="stylus" scoped>
.buildTime
	font-weight 500
	display inline-block
</style>
