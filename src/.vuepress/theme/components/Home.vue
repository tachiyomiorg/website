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
				v-if="data.buttonDownload || data.buttonGuides"
				class="action"
			>
				<a
					v-if="data.buttonDownload"
					class="action-button action-button__Download"
					@click="showDownloads"
				>
					{{ data.buttonDownload }}
				</a>
				<a
					v-if="data.buttonGuides"
					class="action-button action-button__Guides"
					:href="data.buttonGuidesLink"
				>
					{{ data.buttonGuides }}
				</a>
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
				<section class="featureAnimation">
					<img class="featureAnimation__dark" :src="$withBase('/assets/' + feature.image + '-Dark.png')" />
					<img class="featureAnimation__light" :src="$withBase('/assets/' + feature.image + '-Light.png')" />
				</section>
			</div>
		</div>

		<Content class="theme-default-content custom" />

		<footer>
			<div
				v-if="data.footer"
				class="footer"
			>
				{{ data.footer }}
			</div>
		</footer>
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

		buttonDownload () {
			return {
				text: this.data.buttonDownload
			}
		},

		buttonGuidesLink () {
			return {
				link: this.data.buttonGuidesLink,
				text: this.data.buttonGuides
			}
		},

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
			max-width 25rem
			.action-button
				cursor pointer
				margin 0.25rem
				width 10rem
				display inline-block
				font-size 1.2rem
				font-family $buttonFontFamily
				color #fff
				padding 0.8rem
				border-radius 4px
				transition background-color .1s ease
				box-sizing border-box
				border-bottom 1px solid darken($accentColor, 10%)
				.icon.outbound
					display none
				&__Download
					background-color $accentColor
					border-bottom 1px solid darken($accentColor, 10%)
					&:hover
						background-color lighten($accentColor, 10%)
				&__Guides
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
		.featureAnimation
			display block
			position relative
			&__light
			&__dark
				border-radius 6px
				max-height 32em
				max-width 100%
				margin-left auto
				margin-right auto
				left 0
				right 0
			&__light
				animation fade 2s ease-in-out 2s infinite alternate
				box-shadow 0 10px 50px 0px #ddd
			&__dark
				position absolute
				box-shadow 0 10px 50px 0px #ddd
	footer
		position relative
		.footer
			padding 2.5rem
			border-top 1px solid $borderColor
			text-align center
			color lighten($textColor, 25%)

@keyframes fade
	0%
		opacity 1
	25%
		opacity 1
	75%
		opacity 0
	100%
		opacity 0

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
				max-height 6rem
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
				font-size 1.8rem
</style>
