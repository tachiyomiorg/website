<template>
	<div id="DownloadButtons">
		<ElButton type="success" icon="el-icon-download" @click="downloadStable" @keyup.enter="downloadStable">
			<span class="spacing">Stable</span>
			<br />
			<span class="downloadTag">{{ this.$data.tagName }}</span>
		</ElButton>
		<ElButton type="warning" icon="el-icon-cpu" @click="downloadPreview" @keyup.enter="downloadPreview">
			<span class="spacing">Preview</span>
			<br />
			<span class="downloadTag">{{ this.$data.previewTagName }}</span>
		</ElButton>
		<span class="versionNotice">
			Requires
			<strong>Android 6.0</strong>
			or higher.
		</span>
	</div>
</template>

<script>
import { GITHUB_STABLE_RELEASE, GITHUB_PREVIEW_RELEASE } from "../constants";

export default {
	data() {
		return {
			tagName: "0.00.0",
			browserDownloadUrl: "",
			previewTagName: "r0000",
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
			const apkAsset = data.assets.find((a) => /^tachiyomi-r\d{4,}.apk/.test(a.name));
			this.$data.previewTagName = data.tag_name;
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
			window.location.assign(this.$data.browserDownloadUrl || GITHUB_STABLE_RELEASE);
			window.ga("send", "event", "Action", "Download", "Tachiyomi");
		},
		downloadPreview() {
			this.$swal({
				icon: "warning",
				title: "Are you sure?",
				html: `
					<strong>Tachiyomi Preview</strong> is not recommended if you're not willing to test for – and endure – issues.
					<div class="note">
						<p>
							Read more about Tachiyomi Preview
							<a href="../help/faq/#what-is-tachiyomi-preview" rel="help">here</a>.
						</p>
					</div>`,
				confirmButtonText: "I am sure.",
				showCloseButton: true,
				showCancelButton: false,
				showClass: {
					popup: "animate__animated animate__headShake",
				},
				hideClass: {
					popup: "animate__animated animate__faster animate__zoomOut",
				},
				customClass: {
					content: "swal2-downloadPreview_content",
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
	.el-button
		font-size 1.125rem
		margin 0.1em !important
		padding 12px 32px
		width 10em
		&:focus
			box-shadow 0 0 30px #b1aeae52, 0 0 0 1px #fff, 0 0 0 3px rgba(50, 100, 150, 0.4)
			outline none
		&--success
			background-color $accentColor
			border-color $accentColor
			&:hover
				background-color lighten($accentColor, 10%)
				border-color lighten($accentColor, 10%)
			.downloadTag
				color lighten($accentColor, 75%)
		&--warning
			background-color $accentColorSecondary
			border-color $accentColorSecondary
			&:hover
				background-color lighten($accentColorSecondary, 10%)
				border-color  lighten($accentColorSecondary, 10%)
			.downloadTag
				color lighten($accentColorSecondary, 75%)
		.spacing
			margin-right 16px
		.downloadTag
			font-size 0.7em
			margin-top 2px
	.versionNotice
		display block
		font-size 0.9rem
	@media (max-width: $MQMobile)
		.el-button
			width 8.2em
			padding 12px 28px
.swal2-
	&downloadPreview_
		&content
			.note
				text-align center
</style>
