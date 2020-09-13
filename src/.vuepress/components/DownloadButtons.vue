<template>
	<div id="DownloadButtons">
		<div class="downloadContainer">
			<button id="downloadStable" @click="downloadStable" @keyup.enter="downloadStable">
				<CloudDownloadIcon /> Stable
			</button>
			<button id="downloadPreview" @click="downloadPreview" @keyup.enter="downloadPreview">
				<BugIcon /> Preview
			</button>
		</div>
		<span class="versionNotice">Requires <strong>Android 5.0</strong> or higher.</span>
	</div>
</template>

<script>
import CloudDownloadIcon from "vue-material-design-icons/CloudDownload.vue";
import BugIcon from "vue-material-design-icons/Bug.vue";
import { GITHUB_LATEST_RELEASE, GITHUB_PREVIEW_RELEASE } from "../constants";

export default {
	components: {
		CloudDownloadIcon,
		BugIcon,
	},

	data() {
		return {
			tagName: "",
			browserDownloadUrl: "",
			previewTagName: "",
			previewbrowserDownloadUrl: "",
		};
	},

	async mounted() {
		try {
			const { data } = await this.$store.dispatch("getStableReleaseData");
			const apkAsset = data.assets.find((a) => a.name.includes(".apk"));
			this.$data.tagName = data.tag_name.slice(1);
			this.$data.browserDownloadUrl = apkAsset.browser_download_url;
		} catch (e) {
			console.error(e);
		}
		try {
			const { data } = await this.$store.dispatch("getPreviewReleaseData");
			const apkAsset = data.assets.find((a) => a.name.includes(".apk"));
			this.$data.previewTagName = data.tag_name.slice(1);
			this.$data.previewbrowserDownloadUrl = apkAsset.browser_download_url;
		} catch (e) {
			console.error(e);
		}
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
				showClass: {
					popup: "animate__animated animate__faster animate__pulse",
				},
				hideClass: {
					popup: "animate__animated animate__faster animate__zoomOut",
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
						showClass: {
							popup: "animate__animated animate__faster animate__pulse",
						},
						hideClass: {
							popup: "animate__animated animate__faster animate__zoomOut",
						},
					});
					window.location.assign(this.$data.previewbrowserDownloadUrl || GITHUB_PREVIEW_RELEASE);
					window.ga("send", "event", "Action", "Download", "Tachiyomi Preview");
				}
			});
		},
	},
};
</script>

<style lang="stylus">
#DownloadButtons
	text-align center
	button
		display inline-block
		margin 0.5em 0
		padding 1em 1em
		width 9em
		background $accentColor
		border none
		border-radius 4px
		color #fff
		font-family inherit
		font-size 1em
		font-weight 400
		letter-spacing 0.02em
		line-height 1
		transition background-color .1s ease
		text-decoration none
		text-transform uppercase
		cursor pointer
		&:hover
			background darken($accentColor, 10%)
		&:focus
			box-shadow 0 0 30px #b1aeae52, 0 0 0 1px #fff, 0 0 0 3px rgba(50, 100, 150, 0.4)
			outline none
	.downloadContainer
		user-select none
		#download
			&Stable
				background-color $accentColor
				&:hover
					background-color lighten($accentColor, 10%)
			&Preview
				background-color $accentColorSecondary
				&:hover
					background-color lighten($accentColorSecondary, 10%)
	.versionNotice
		font-size 0.9rem
</style>
