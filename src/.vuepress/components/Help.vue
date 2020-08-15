<template>
	<div class="theme-container help-page">
		<Navbar />
		<main class="page">
			<div class="theme-custom-content content__default">
				<slot name="top" />

				<Content class="theme-custom-content" />

				<Content slot-key="center" />

				<AlgoliaSearchBox :options="algolia" />

				<div v-if="data.help && data.help.length" class="row help">
					<div v-for="(helpItem, index) in data.help" :key="index" class="column helpItem">
						<a v-if="helpItem.link" :href="helpItem.link" tabindex="1">
							<div class="card" :class="'card__' + helpItem.title">
								<header v-if="helpItem.faqApp">
									<CellphoneAndroidIcon />
									<h3>{{ helpItem.title }}</h3>
								</header>
								<header v-else-if="helpItem.faqExt">
									<PuzzleIcon />
									<h3>{{ helpItem.title }}</h3>
								</header>
								<header v-else-if="helpItem.guides">
									<ClipboardListIcon />
									<h3>{{ helpItem.title }}</h3>
								</header>
								<header v-else-if="helpItem.forks">
									<SourceForkIcon />
									<h3>{{ helpItem.title }}</h3>
								</header>
								<header v-else-if="helpItem.contribution">
									<LifebuoyIcon />
									<h3>{{ helpItem.title }}</h3>
								</header>
								<header v-else-if="helpItem.icon">
									<MaterialIcon :icon-name="helpItem.icon" icon-only />
									<h3>{{ helpItem.title }}</h3>
								</header>
								<p>{{ helpItem.description }}</p>
							</div>
						</a>
						<a
							v-else-if="helpItem.linkExt"
							:href="helpItem.linkExt"
							target="_blank"
							rel="noreferrer"
							tabindex="1"
						>
							<div class="card" :class="'card__' + helpItem.title">
								<header v-if="helpItem.discord">
									<DiscordIcon />
									<span>
										<h3>{{ helpItem.title }}</h3>
										<OutboundLink />
									</span>
								</header>
								<header v-else-if="helpItem.reddit">
									<RedditIcon />
									<span>
										<h3>{{ helpItem.title }}</h3>
										<OutboundLink />
									</span>
								</header>
								<header v-else-if="helpItem.github">
									<GithubIcon />
									<span>
										<h3>{{ helpItem.title }}</h3>
										<OutboundLink />
									</span>
								</header>
								<header v-else-if="helpItem.icon">
									<MaterialIcon :icon-name="helpItem.icon" icon-only />
									<h3>{{ helpItem.title }}</h3>
								</header>
								<p>{{ helpItem.description }}</p>
							</div>
						</a>
					</div>
				</div>

				<slot name="bottom" />
			</div>
		</main>
	</div>
</template>

<script>
import Navbar from "@theme/components/Navbar.vue";
import AlgoliaSearchBox from "@theme/components/AlgoliaSearchBox.vue";

import CellphoneAndroidIcon from "vue-material-design-icons/CellphoneAndroid.vue";
import ClipboardListIcon from "vue-material-design-icons/ClipboardList.vue";
import SourceForkIcon from "vue-material-design-icons/SourceFork.vue";
import PuzzleIcon from "vue-material-design-icons/Puzzle.vue";
import DiscordIcon from "vue-material-design-icons/Discord.vue";
import RedditIcon from "vue-material-design-icons/Reddit.vue";
import GithubIcon from "vue-material-design-icons/Github.vue";
import LifebuoyIcon from "vue-material-design-icons/Lifebuoy.vue";

export default {
	components: {
		Navbar,
		AlgoliaSearchBox,
		CellphoneAndroidIcon,
		ClipboardListIcon,
		SourceForkIcon,
		PuzzleIcon,
		DiscordIcon,
		RedditIcon,
		GithubIcon,
		LifebuoyIcon,
	},

	computed: {
		data() {
			return this.$page.frontmatter;
		},

		algolia() {
			return this.$themeLocaleConfig.algolia || this.$site.themeConfig.algolia || {};
		},

		isAlgoliaSearch() {
			return this.algolia && this.algolia.apiKey && this.algolia.indexName;
		},
	},
};
</script>

<style lang="stylus">
.help-page
	.page
		padding-left 0 !important
		padding-bottom 2rem
		display block
		.theme-custom-content
			max-width 75rem
			margin 0 auto
			padding 2rem 2.5rem
			*
				box-sizing border-box
			h1
				text-align center
				.header-anchor
					display none
			h3
				.header-anchor
					display none
			.content__center
				text-align center
				margin-bottom 2rem
			.algolia-search-wrapper
				width 100%
				text-align center
				margin-bottom 5rem
				.algolia-autocomplete
					width 50%
					input
						background #ffffff url('/assets/img/search.83621669.svg') 0.6rem 0.9rem no-repeat
						background-size 1rem
						box-shadow 0 0 30px rgba(177, 174, 174, 0.322)
						border 1px solid #cfd4db
						font-size 1.2rem
						height 3rem
						width 100%
			.card
				background-color white
				border-bottom 1px solid transparent
				border-radius 6px
				box-shadow 0 0 30px #b1aeae52
				color $accentColor
				height 100%
				overflow hidden
				padding 0.5rem
				text-align center
				user-select none
				width auto
				header
					margin-top 1.25rem
					white-space nowrap
					.material-icons,
					.material-design-icon
						display contents
						font-size 2.5em
						color $accentColorSecondary
					.material-design-icon > .material-design-icon__svg
						position relative
					span
						display block
						.icon.outbound
							display inline-block
							visibility hidden
							vertical-align baseline
							right 10px
						h3
							display inline-block
							margin-left 1.8rem
							margin-bottom 0
					h3
						margin 10px
				p
					color #566573
					font-weight 400
					font-size 0.95rem
				&:hover
					border-bottom 2px solid $accentColor
					border-bottom-left-radius 0
					border-bottom-right-radius 0
					position relative
					.material-design-icon
						color $accentColor
						&.discord-icon
							color $discordAccentColor
						&.reddit-icon
							color $redditAccentColor
						&.github-icon
							color $githubAccentColor
					.icon.outbound
						visibility visible
				&__Discord:hover
					border-bottom 2px solid $discordAccentColor
					h3
						color $discordAccentColor
				&__Reddit:hover
					border-bottom 2px solid $redditAccentColor
					h3
						color $redditAccentColor
				&__GitHub:hover
					border-bottom 2px solid $githubAccentColor
					h3
						color $githubAccentColor
			.column
				border 1px solid #cfd4db
				border-radius 6px
				&:hover
					border-bottom none
				a:focus
					box-shadow none
					outline none
					.card
						box-shadow 0 0 30px #b1aeae52, 0 0 0 1px #fff, 0 0 0 3px rgba(50, 100, 150, 0.4)
						outline none
			.row
				display grid
				grid-template-columns repeat(4, 1fr)
				grid-auto-rows 1fr
				grid-gap 1rem
				&:after
					content ""
					display table
					clear both

@media screen and (max-width $MQMobile)
	.help-page
		.page
			.theme-custom-content
				padding 2rem 0.75rem
				padding-bottom 0
				h1
					margin-bottom 0.5rem
				.content__center
					margin-top 0
					padding-top 0
				.algolia-search-wrapper
					width 100%
					margin-bottom 1rem
					.algolia-autocomplete
						width 100%
						padding 0.4rem 0.65rem
						input
							width 100%
							left 0
				.column
					margin 0.4rem 0.6rem
				.card
					height auto
					width auto
					header
						margin-top 1rem
						.material-icons,
						.material-design-icon
							font-size 1.6em
							&.discord-icon
								color $discordAccentColor
							&.reddit-icon
								color $redditAccentColor
							&.github-icon
								color $githubAccentColor
						span
							display inline-block
							.icon.outbound
								visibility visible
								right 0
								top -4px
							h3
								margin-left 0
								margin-bottom 0
						h3
							font-size 1.5rem
							display inline-block
							margin 0
					p
						font-size 1rem
					&:hover
						border-bottom 2px solid #cfd4db
						border-bottom-left-radius 6px
						border-bottom-right-radius 6px
						position inherit
						top unset
						.material-design-icon
							color $accentColorSecondary
					&__Discord
						h3
							color $discordAccentColor
					&__Reddit
						h3
							color $redditAccentColor
					&__GitHub
						h3
							color $githubAccentColor
				.row
					grid-template-columns repeat(1, 1fr)
		.navbar
			padding-left 1rem
			.logo
				margin-right 0
			.can-hide
				display block
			.sidebar-button
				display none
			.site-name.can-hide
				display none
			.nav-links.can-hide
				.nav-item,
				.repo-link
					padding-left 0.8em
</style>
