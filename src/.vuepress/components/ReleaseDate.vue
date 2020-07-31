<template>
	<div class="buildTime">
		<span :title="releasePublishExact">{{ releasePublishRelative }}</span>
	</div>
</template>

<script>
import axios from "axios";
import { GITHUB_LATEST_API } from "../constants";

export default {
	data() {
		return {
			releasePublishRelative: "at an unknown time",
			releasePublishExact: "Can't connect to GitHub.",
		};
	},

	async mounted() {
		const { data } = await axios.get(GITHUB_LATEST_API);
		this.$data.releasePublishRelative = this.$moment(data.published_at).fromNow();
		this.$data.releasePublishExact = this.$moment(data.published_at).toString();
	},
};
</script>

<style lang="stylus" scoped>
.buildTime
	font-weight 500
	display inline-block
</style>
