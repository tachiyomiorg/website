<template>
	<div v-if="stable" class="buildTime">
		<ElTooltip :content="stablePublishExact" placement="top" :open-delay="250">
			<span>{{ stablePublishRelative }}</span>
		</ElTooltip>
	</div>
	<div v-else-if="preview" class="buildTime">
		<ElTooltip :content="previewPublishExact" placement="bottom-end" :open-delay="250">
			<span>{{ previewPublishRelative }}</span>
		</ElTooltip>
	</div>
	<span v-else>You need to specify props.</span>
</template>

<script>
/**
 * Code example: <ReleaseDate preview />
 */
export default {
	props: {
		stable: {
			type: Boolean,
			default: false,
		},
		preview: {
			type: Boolean,
			default: false,
		},
	},

	data() {
		return {
			stablePublishRelative: "at an unknown time",
			stablePublishExact: "Can't connect to GitHub.",
			previewPublishRelative: "at an unknown time",
			previewPublishExact: "Can't connect to GitHub.",
		};
	},

	async mounted() {
		try {
			const { data } = await this.$store.dispatch("getStableReleaseData");
			this.$data.stablePublishRelative = this.$moment(data.published_at).fromNow();
			this.$data.stablePublishExact = this.$moment(data.published_at).format("dddd, MMMM Do YYYY [at] HH:mm");
		} catch (e) {
			console.error(e);
		}
		try {
			const { data } = await this.$store.dispatch("getPreviewReleaseData");
			this.$data.previewPublishRelative = this.$moment(data.published_at).fromNow();
			this.$data.previewPublishExact = this.$moment(data.published_at).format("dddd, MMMM Do YYYY [at] HH:mm");
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
