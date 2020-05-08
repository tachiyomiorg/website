<template>
	<main
		class="home"
		aria-labelledby="main-title"
	>
		<header class="hero">
			<img
				v-if="data.heroImage"
				:src="$withBase(data.heroImage)"
				:alt="data.heroAlt || 'Logo'"
			>

			<h1
				v-if="data.heroText !== null"
				id="main-title"
			>
				{{ data.heroText || $title || 'Tachiyomi' }}
			</h1>

			<p
				v-if="data.tagline !== null"
				class="description"
			>
				{{ data.tagline || $description || 'Free and open source manga reader for Android.' }}
			</p>

			<p
				v-if="data.actionText && data.actionLink"
				class="action"
			>
				<a
					class="action-button action-button__download"
					@click="showDownloads"
				>
					{{ data.actionDownload }}
				</a>
				<NavLink
					class="action-button action-button__get-started"
					:item="actionLink"
				/>
			</p>
		</header>

		<div
			v-if="data.features && data.features.length"
			class="features"
		>
			<div
				v-for="(feature, index) in data.features"
				:key="index"
				class="feature"
			>
				<h2>{{ feature.title }}</h2>
				<p>{{ feature.details }}</p>
				<img v-if="feature.image" :src="$withBase(feature.image)" />
			</div>
		</div>

		<Content class="theme-default-content custom" />

		<div
			v-if="data.footer"
			class="footer"
		>
			{{ data.footer }}
		</div>
	</main>
</template>

<script>
import NavLink from '@theme/components/NavLink.vue'
import axios from "axios";

const RELEASE_URL =
	"https://api.github.com/repos/inorichi/tachiyomi/releases/latest";

const LATEST_RELEASE =
	"https://github.com/inorichi/tachiyomi/releases/latest";

const PREVIEW_URL =
	"https://tachiyomi.kanade.eu/latest";

export default {
	name: 'Home',

	components: { NavLink },

	data() {
		return {
			tagName: "",
			browserDownloadUrl: "",
		};
	},

	computed: {
		data () {
			return this.$page.frontmatter
		},

		actionDownload () {
			return {
				text: this.data.actionDownload
			}
		},

		actionLink () {
			return {
				link: this.data.actionLink,
				text: this.data.actionText
			}
		}
	},

	methods: {
		showDownloads() {
			this.$swal({
				title: 'Get Tachiyomi for Android',
				text: 'Requires Android 5.0 or newer.',
				confirmButtonText: 'Download',
				confirmButtonAriaLabel: 'Download Tachiyomi',
				cancelButtonText: 'Living on the edge? Get the <strong>Preview</strong>',
				cancelButtonAriaLabel: 'Download Preview',
				showCloseButton: true,
				showCancelButton: true,
				focusConfirm: true,
				customClass: {
					container: "showDownloads",
					popup: "showDownloads__popup",
					actions: "showDownloads__actions",
					title: "showDownloads__title",
					content: "showDownloads__content",
					confirmButton: "showDownloads__confirmButton",
					cancelButton: "showDownloads__cancelButton",
					footer: "showDownloads__footer",
				},
				showClass: {
					popup: "animate__animated animate__faster animate__fadeIn"
				},
				hideClass: {
					popup: "animate__animated animate__faster animate__zoomOut"
				},
			}).then(result => {
				if (result.value) {
					this.$swal({
						icon: "success",
						title: "Downloading",
						text: "Tachiyomi",
						confirmButtonText: 'Dismiss',
						showCloseButton: false,
						showCancelButton: false,
						timer: 50000,
						timerProgressBar: true,
						customClass: {
							container: "showDownloads",
							popup: "showDownloads__popup",
							actions: "showDownloads__actions",
							title: "showDownloads__title",
							content: "showDownloads__content",
							confirmButton: "showDownloads__confirmButton",
							cancelButton: "showDownloads__cancelButton",
							footer: "showDownloads__footer",
						},
						showClass: {
							popup: "animate__animated animate__faster animate__pulse"
						},
						hideClass: {
							popup: "animate__animated animate__faster animate__zoomOut"
						},
					});
					window.location.assign(
						this.$data.browserDownloadUrl || LATEST_RELEASE
					);
					window.ga("send", "event", "Action", "Download", "Tachiyomi");
				} else if (result.dismiss === "cancel") {
					this.$swal({
						icon: "warning",
						title: "Are you sure?",
						html: "<strong>Preview</strong> is not recommended if you're not willing to test for – and endure issues.",
						confirmButtonText: 'I am sure.',
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
							footer: "showDownloads__footer",
						},
						showClass: {
							popup: "animate__animated animate__headShake"
						},
						hideClass: {
							popup: "animate__animated animate__faster animate__zoomOut"
						},
					}).then(result => {
						if (result.value) {
							this.$swal({
								icon: "success",
								title: "Downloading",
								text: "Tachiyomi Preview",
								confirmButtonText: 'Dismiss',
								showCloseButton: false,
								showCancelButton: false,
								timer: 5000,
								timerProgressBar: true,
								customClass: {
									container: "showDownloads",
									popup: "showDownloads__popup",
									actions: "showDownloads__actions",
									title: "showDownloads__title",
									content: "showDownloads__content",
									confirmButton: "showDownloads__confirmButton",
									cancelButton: "showDownloads__cancelButton",
									footer: "showDownloads__footer",
								},
								showClass: {
									popup: "animate__animated animate__faster animate__pulse"
								},
								hideClass: {
									popup: "animate__animated animate__faster animate__zoomOut"
								},
							});
							window.location.assign(
								PREVIEW_URL
							);
							window.ga("send", "event", "Action", "Download", "Tachiyomi Preview");
						}
					});
				}
			});
		}
	},

	async mounted() {
		const { data } = await axios.get(RELEASE_URL);
		const apkAsset = data.assets.find((a) => a.name.includes(".apk"));
		this.$data.tagName = data.tag_name;
		this.$data.browserDownloadUrl = apkAsset.browser_download_url;
	},

}
</script>

<style lang="stylus">
.home
	padding $navbarHeight 2rem 0
	max-width $homePageWidth
	margin 0px auto
	display block
	.hero
		text-align center
		img
			max-width: 100%
			max-height $heroImageHeight
			display block
			margin 3rem auto 1.5rem
		h1
			font-size 3rem
		h1, .description, .action
			margin 1.8rem auto
		.description
			max-width 35rem
			font-size 1.6rem
			line-height 1.3
			color lighten($textColor, 40%)
		.action
			user-select none
			.action-button
				cursor pointer
				margin 0.25rem
				min-width 11rem
				display inline-block
				font-size 1.2rem
				font-family $buttonFontFamily
				color #fff
				padding 0.8rem 1.6rem
				border-radius 4px
				transition background-color .1s ease
				box-sizing border-box
				border-bottom 1px solid darken($accentColor, 10%)
				.icon.outbound
					display none
				&__download
					background-color $accentColor
					border-bottom 1px solid darken($accentColor, 10%)
					&:hover
						background-color lighten($accentColor, 10%)
				&__get-started
					background-color $accentColorSecondary
					border-bottom 1px solid darken($accentColorSecondary, 10%)
					&:hover
						background-color lighten($accentColorSecondary, 10%)
	.features
		border-top 1px solid $borderColor
		padding 1.2rem 0
		margin-top 2.5rem
		display flex
		flex-wrap wrap
		align-items flex-start
		align-content stretch
		justify-content space-between
	.feature
		flex-grow 1
		flex-basis 30%
		max-width 30%
		text-align center
		h2
			font-size 1.4rem
			font-weight 500
			border-bottom none
			padding-bottom 0
			color lighten($textColor, 10%)
		p
			color lighten($textColor, 25%)
			min-height 4em
		img
			max-height 28em
			max-width 100%
	.footer
		padding 2.5rem
		border-top 1px solid $borderColor
		text-align center
		color lighten($textColor, 25%)

@media (max-width: $MQMobile)
	.home
		.features
			flex-direction column
		.feature
			max-width 100%
			padding 0 2.5rem

@media (max-width: $MQMobileNarrow)
	.home
		padding-left 1.5rem
		padding-right 1.5rem
		.hero
			img
				max-height 210px
				margin 2rem auto 1.2rem
			h1
				font-size 2rem
			h1, .description, .action
				margin 1.2rem auto
			.description
				font-size 1.2rem
			.action-button
				font-size 1rem
				padding 0.6rem 1.2rem
		.feature
			h2
				font-size 1.25rem
</style>
