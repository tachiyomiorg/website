<template>
	<div class="downloadContainer">
		<button class="downloadStableButton" @click="downloadStable" @keyup.enter="downloadStable">
			<CloudDownloadIcon />
			Stable
		</button>
		<button class="downloadPreviewButton" @click="downloadPreview" @keyup.enter="downloadPreview">
			<BugIcon />
			Preview
		</button>
		<br /><span class="versionNotice">Requires <i>Android 5.0</i> or higher.</span>
	</div>
</template>

<script>
import axios from "axios";
import CloudDownloadIcon from "vue-material-design-icons/CloudDownload.vue";
import BugIcon from "vue-material-design-icons/Bug.vue";
import { GITHUB_LATEST_API, GITHUB_LATEST_RELEASE, KANADE_LATEST } from "../constants";

export default {
	components: {
		CloudDownloadIcon,
		BugIcon,
	},

	data() {
		return {
			tagName: "",
			browserDownloadUrl: "",
		};
	},

	async mounted() {
		const { data } = await axios.get(GITHUB_LATEST_API);
		const apkAsset = data.assets.find((a) => a.name.includes(".apk"));
		this.$data.tagName = data.tag_name.slice(1);
		this.$data.browserDownloadUrl = apkAsset.browser_download_url;
	},

	methods: {
		downloadStable() {
			this.$swal({
				title: "Downloading",
				html: `Started downloading <strong>Tachiyomi Stable</strong>`,
				icon: "success",
				focusConfirm: false,
				focusCancel: false,
				timer: 3000,
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
			window.location.assign(this.$data.browserDownloadUrl || GITHUB_LATEST_RELEASE);
			window.ga("send", "event", "Action", "Download", "Tachiyomi");
		},
		downloadPreview() {
			this.$swal({
				icon: "warning",
				title: "Are you sure?",
				html:
					"<strong>Tachiyomi Preview</strong> is not recommended if you're not willing to test for – and endure – issues.",
				confirmButtonText: "I am sure.",
				showCloseButton: true,
				showCancelButton: false,
				customClass: {
					container: "showDownloads",
					popup: "showDownloads__popup",
					actions: "showDownloads__actions",
					title: "showDownloads__title",
					content: "showDownloads__content",
					confirmButton: "showDownloads__confirmButton",
					cancelButton: "showDownloads__cancelButton",
					closeButton: "showDownloads__closeButton",
					footer: "showDownloads__footer",
				},
				showClass: {
					popup: "animate__animated animate__headShake",
				},
				hideClass: {
					popup: "animate__animated animate__faster animate__zoomOut",
				},
				// eslint-disable-next-line no-shadow
			}).then((result) => {
				if (result.value) {
					this.$swal({
						icon: "success",
						title: "Downloading",
						html: `Started downloading <strong>Tachiyomi Preview</strong>`,
						confirmButtonText: "Dismiss",
						showCloseButton: false,
						showCancelButton: false,
						timer: 3000,
						timerProgressBar: true,
						customClass: {
							container: "showDownloads",
							popup: "showDownloads__popup",
							actions: "showDownloads__actions",
							title: "showDownloads__title",
							content: "showDownloads__content",
							confirmButton: "showDownloads__confirmButton",
							cancelButton: "showDownloads__cancelButton",
							closeButton: "showDownloads__closeButton",
							footer: "showDownloads__footer",
						},
						showClass: {
							popup: "animate__animated animate__faster animate__pulse",
						},
						hideClass: {
							popup: "animate__animated animate__faster animate__zoomOut",
						},
					});
					window.location.assign(KANADE_LATEST);
					window.ga("send", "event", "Action", "Download", "Tachiyomi Preview");
				}
			});
		},
	},
};
</script>

<style lang="stylus">
.downloadContainer
	user-select none
	text-align center
	margin 0.3125rem
	.downloadStableButton
	.downloadPreviewButton
		border 0px
		border-bottom 1px solid darken($accentColor, 10%)
		border-radius 4px
		box-sizing border-box
		color #fff
		cursor pointer
		display inline-block
		font-family $buttonFontFamily
		font-size 1.125rem
		margin 0.25rem
		padding 0.8rem
		transition background-color .1s ease
		width 10rem
		height 3.5rem
		&:focus
			box-shadow 0 0 30px #b1aeae52, 0 0 0 1px #fff, 0 0 0 3px rgba(50, 100, 150, 0.4)
			outline none
	.downloadStableButton
		background-color $accentColor
		border-bottom 1px solid darken($accentColor, 10%)
		&:hover
			background-color lighten($accentColor, 10%)
	.downloadPreviewButton
		background-color $accentColorSecondary
		border-bottom 1px solid darken($accentColorSecondary, 10%)
		&:hover
			background-color lighten($accentColorSecondary, 10%)
.versionNotice
	font-size 0.9rem
</style>
