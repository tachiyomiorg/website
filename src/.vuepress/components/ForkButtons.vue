<script>
import axios from "axios";

export default {
	props: {
		forkName: {
			type: String,
			required: true,
		},
		downloadForkLabel: {
			type: String,
			default: "Download",
		},
		downloadForkLink: {
			type: String,
			required: true,
		},
		downloadForkStyle: {
			type: String,
			default: "",
		},
		githubForkLabel: {
			type: String,
			default: "GitHub",
		},
		githubForkLink: {
			type: String,
			required: true,
		},
		githubForkStyle: {
			type: String,
			default: "",
		},
		androidVersion: {
			type: String,
			default: "5.0",
		},
	},
	data() {
		return {
			tagName: "",
			browserDownloadUrl: "",
		};
	},

	async mounted() {
		const { data } = await axios.get(this.$props.downloadForkLink);
		// Maybe eventually some release has more than the apk in assets.
		const apkAsset = data.assets.find((a) => a.name.includes(".apk"));
		// Set the values.
		this.$data.tagName = data.tag_name;
		this.$data.browserDownloadUrl = apkAsset.browser_download_url;
	},

	methods: {
		downloadFork() {
			this.$swal({
				title: "Downloading",
				text: `${this.$props.forkName} is being downloaded.`,
				icon: "success",
				focusConfirm: false,
				focusCancel: false,
				timer: 5000,
				timerProgressBar: true,
				customClass: {
					confirmButton: "download-confirm-button",
					container: "download-container",
				},
				showClass: {
					popup: "animated pulse faster",
				},
				hideClass: {
					popup: "animated zoomOut faster",
				},
			});
			window.location.assign(this.$data.browserDownloadUrl || this.$props.githubForkLink + "/releases/latest");
			window.ga("send", "event", "Action", "Download", this.$props.forkName);
		},
	},
};
</script>

<template>
	<div class="downloadContainer">
		<button class="downloadForkButton" :style="downloadForkStyle" @click="downloadFork">
			{{ downloadForkLabel }}
		</button>
		<button class="githubForkButton" :style="githubForkStyle" :onclick="'window.open(\'' + githubForkLink + '\')'">
			{{ githubForkLabel }}
		</button>
		<br />
		<span class="versionNotice">
			Requires
			<strong>Android {{ androidVersion }}</strong>
			or higher.
		</span>
	</div>
</template>

<style lang="stylus">
.downloadContainer
	user-select none
	text-align center
	margin 0.3125rem
	.downloadForkButton
	.githubForkButton
		border-radius $buttonBorderRadius
		border-style none
		color white
		font-family $fontButton
		font-size 1.125em
		height 3rem
		margin 0.3125rem
		padding 0.625 2em
		width 8.5rem
		&:focus
			outline none
			outline-style none
		&:hover
			cursor pointer
			text-decoration none !important
			background-image linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))
	.downloadForkButton
		background-color $accentColor
	.githubForkButton
		background-color #181818
		&:hover
			background-color lighten(#181818, 15)
</style>
