<template>
	<div class="downloadContainer">
		<button class="downloadStableButton" @click="downloadStable">
			{{ downloadStableLabel }}
		</button>
		<button class="downloadPreviewButton" @click="downloadPreview">
			{{ downloadPreviewLabel }}
		</button>
	</div>
</template>

<script>
import axios from "axios";

const RELEASE_URL =
	"https://api.github.com/repos/inorichi/tachiyomi/releases/latest";

const PREVIEW_URL =
	"https://tachiyomi.kanade.eu/latest";

export default {
	props: {
		downloadStableTag: {
			type: String,
			required: true
		},
		downloadPreviewTag: {
			type: String,
			required: true
		},
		downloadStableLabel: {
			type: String,
			default: "Stable"
		},
		downloadPreviewLabel: {
			type: String,
			default: "Preview"
		},
		downloadStableUrl: {
			type: String,
			default: undefined
		},
		downloadPreviewUrl: {
			type: String,
			default: undefined
		}
	},

	data() {
		return {
			tagName: "",
			browserDownloadUrl: "",
		};
	},

	async mounted() {
		const { data } = await axios.get(RELEASE_URL);
		// Maybe eventually some release has more than the apk in assets.
		const apkAsset = data.assets.find(a => a.name.includes(".apk"));
		// Set the values.
		this.$data.tagName = data.tag_name;
		this.$data.browserDownloadUrl = apkAsset.browser_download_url;
	},

	methods: {
		downloadStable() {
			this.$swal({
				title: "Downloading",
				text: this.downloadStableLabel + " version is being downloaded.",
				icon: "success",
				focusConfirm: false,
				focusCancel: false,
				timer: 5000,
				timerProgressBar: true,
				customClass: {
					confirmButton: "download-confirm-button",
					container: "download-container"
				},
				showClass: {
					popup: "animated pulse faster"
				},
				hideClass: {
					popup: "animated zoomOut faster"
				}
			});
			window.location.assign(
				this.$props.downloadStableUrl || this.$data.browserDownloadUrl || RELEASE_URL
			);
			window.ga("send", "event", "Action", "Download", this.downloadStableTag);
		},
		downloadPreview() {
			this.$swal({
				title: "Downloading",
				text: this.downloadPreviewLabel + " version is being downloaded.",
				icon: "success",
				focusConfirm: false,
				focusCancel: false,
				timer: 5000,
				timerProgressBar: true,
				customClass: {
					confirmButton: "download-confirm-button",
					container: "download-container"
				},
				showClass: {
					popup: "animated pulse faster"
				},
				hideClass: {
					popup: "animated zoomOut faster"
				}
			});
			window.location.assign(
				this.$props.downloadPreviewUrl || PREVIEW_URL
			);
			window.ga("send", "event", "Action", "Download", this.downloadPreviewTag);
		}
	}
};
</script>

<style lang="stylus">
.downloadContainer
	user-select none
	text-align center
	margin 0.3125rem
	.downloadStableButton
	.downloadPreviewButton
		border-style none
		padding 0.625 2em
		margin 0.3125rem
		border-radius $buttonBorderRadius
		font-family $buttonFontFamily
		font-size 1.125em
		color white
		height 3rem
		width 8.5rem
		&:focus
			outline none
			outline-style solid
		&:hover
			cursor pointer
			text-decoration none !important
			background-image linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))
	.downloadStableButton
		background-color $accentColor
	.downloadPreviewButton
		background-color $accentColorSecondary
</style>
