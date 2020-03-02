<template>
	<main class="home" aria-labelledby="main-title">
		<header class="hero">
			<img
				v-if="data.heroImage"
				:src="$withBase(data.heroImage)"
				:alt="data.heroAlt || 'hero'"
			/>

			<h1 v-if="data.heroText !== null" id="main-title">
				{{ data.heroText || $title || "Tachiyomi" }}
			</h1>

			<p class="description">
				{{
					data.tagline ||
						$description ||
						"Free and open source manga reader for Android."
				}}
			</p>

			<p class="action" v-if="data.actionText && data.actionLink">
				<a @click="showDownloads" class="action-button download">
					Download ↓
				</a>
				<NavLink class="action-button secondary" :item="actionLink" />
			</p>
		</header>

		<div class="features" v-if="data.features && data.features.length">
			<div
				class="feature"
				v-for="(feature, index) in data.features"
				:key="index"
			>
				<h2>{{ feature.title }}</h2>
				<p>{{ feature.details }}</p>
				<img v-if="feature.image" :src="$withBase(feature.image)" />
			</div>
		</div>

		<Content class="theme-default-content custom" />

		<footer class="footer" v-if="data.footer">
			{{ data.footer }}
		</footer>
	</main>
</template>

<script>
import NavLink from "@parent-theme/components/NavLink.vue";

import axios from "axios";

const RELEASE_URL =
	"https://api.github.com/repos/inorichi/tachiyomi/releases/latest";

export default {
	components: { NavLink },

	data() {
		return {
			tagName: "",
			browserDownloadUrl: ""
		};
	},

	computed: {
		data() {
			return this.$page.frontmatter;
		},

		actionLink() {
			return {
				link: this.data.actionLink,
				text: this.data.actionText
			};
		}
	},

	methods: {
		showDownloads() {
			this.$swal({
				title: "Download",
				text: "Select which version to use",
				confirmButtonText: "Stable",
				confirmButtonAriaLabel: "Stable",
				cancelButtonText: "Dev",
				cancelButtonAriaLabel: "Dev",
				showCloseButton: true,
				showCancelButton: true,
				focusConfirm: false,
				customClass: {
					actions: "download-actions",
					cancelButton: "download-dev-button",
					closeButton: "download-close-button",
					confirmButton: "download-stable-button",
					container: "download-container",
					content: "download-content",
					header: "download-header",
					icon: "download-icon",
					popup: "download-popup",
					title: "download-title"
				},
				showClass: {
					popup: "animated zoomIn fastest"
				},
				hideClass: {
					popup: "animated zoomOut faster"
				}
			}).then(result => {
				if (result.value) {
					this.$swal({
						title: "Downloading",
						text: "Stable version is being downloaded.",
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
						this.$data.browserDownloadUrl ||
							"https://github.com/inorichi/tachiyomi/releases/latest"
					);
					window.ga(
						"send",
						"event",
						"Button",
						"Click",
						"Stable download"
					);
				} else if (result.dismiss === "cancel") {
					this.$swal({
						title: "Downloading",
						text: "Development version is being downloaded.",
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
					window.location.assign("http://tachiyomi.kanade.eu/latest");
					window.ga(
						"send",
						"event",
						"Button",
						"Click",
						"Dev download"
					);
				}
			});
		}
	},

	async mounted() {
		const { data } = await axios.get(RELEASE_URL);
		// Maybe eventually some release has more than the apk in assets.
		const apkAsset = data.assets.find(a => a.name.includes(".apk"));
		// Set the values.
		this.$data.tagName = data.tag_name;
		this.$data.browserDownloadUrl = apkAsset.browser_download_url;
	}
};
</script>

<style lang="stylus">
.home
	display block
	margin 0 auto
	padding $navbarHeight 2rem 0
	.hero
		text-align center
		img
			display block
			margin 3rem auto 1.5rem
			max-width 100%
		h1
			font-size 3rem
		h1
		.description
		.action
			margin 1.8rem auto
		.description
			color lighten($textColor, 40%)
			font-size 1.6rem
			line-height 1.3
			max-width 35rem
		.action-button
			background-color $accentColor
			border-bottom 1px solid darken($accentColor, 10%)
			box-sizing border-box
			color #fff
			display inline-block
			padding 0.8rem 1.6rem
			transition background-color 0.1s ease
			&:hover
				background-color lighten($accentColor, 10%)
			&.secondary
				background-color darken($borderColor, 5%)
				border-bottom-color darken($borderColor, 15%)
				color lighten($textColor, 25%)
				&:hover
					background-color lighten($borderColor, 5%)
			svg + span
				margin-left 0.5rem
			svg
				height 1em
				width 1em
			& + .action-button
				margin-left 0.5rem
	.features
		align-content stretch
		align-items flex-start
		border-top 1px solid $borderColor
		display flex
		flex-wrap wrap
		justify-content space-between
		margin-top 2.5rem
		padding 1.2rem 0
	.feature
		flex-basis 30%
		flex-grow 1
		max-width 30%
		h2
			border-bottom none
			color lighten($textColor, 10%)
			font-size 1.4rem
			font-weight 500
			padding-bottom 0
		p
			color lighten($textColor, 25%)
	.footer
		border-top 1px solid $borderColor
		color lighten($textColor, 25%)
		padding 2.5rem
		text-align center

@media (max-width: $MQMobile)
	.home
		.features
			flex-direction column
		.feature
			max-width 100%
			padding 0 2.5rem
		.hero
			.action-button + .action-button
				margin-left 0
				margin-top 0.5rem

@media (max-width: $MQMobileNarrow)
	.home
		padding-left 1.5rem
		padding-right 1.5rem
		.hero
			img
				margin 2rem auto 1.2rem
			h1
				font-size 2rem
			h1
			.description
			.action
				margin 1.2rem auto
			.description
				font-size 1.2rem
			.action-button
				font-size 1rem
				padding 0.6rem 1.2rem
			.feature h2
				font-size 1.25rem
</style>
