<script>
import DiscordIcon from "vue-material-design-icons/Discord.vue";
import FacebookIcon from "vue-material-design-icons/Facebook.vue";
import GithubIcon from "vue-material-design-icons/Github.vue";
import RedditIcon from "vue-material-design-icons/Reddit.vue";
import TwitterIcon from "vue-material-design-icons/Twitter.vue";

export default {
	name: "PageFooter",

	components: {
		DiscordIcon,
		TwitterIcon,
		FacebookIcon,
		RedditIcon,
		GithubIcon,
	},
};
</script>

<template>
	<footer>
		<div class="footer">
			<div class="copyright">
				Copyright &copy; 2015{{ " - " + new Date().getFullYear() }} Javier Tomás |
				<a href="https://www.apache.org/licenses/LICENSE-2.0">Open-source Apache Licensed</a>
				|
				<a href="/privacy">Privacy policy</a>
			</div>
			<div class="social">
				<a target="_blank" rel="noopener noreferrer" href="https://discord.gg/tachiyomi">
					<DiscordIcon />
					Discord
					<OutboundLink />
				</a>
				<a target="_blank" rel="noopener noreferrer" href="https://twitter.com/tachiyomiorg">
					<TwitterIcon />
					Twitter
					<OutboundLink />
				</a>
				<a target="_blank" rel="noopener noreferrer" href="https://facebook.com/tachiyomiorg">
					<FacebookIcon />
					Facebook
					<OutboundLink />
				</a>
				<a target="_blank" rel="noopener noreferrer" href="https://reddit.com/r/Tachiyomi">
					<RedditIcon />
					Reddit
					<OutboundLink />
				</a>
				<a target="_blank" rel="noopener noreferrer" href="https://github.com/tachiyomiorg">
					<GithubIcon />
					GitHub
					<OutboundLink />
				</a>
			</div>
			<div class="netlify">
				<a target="_blank" href="https://www.netlify.com/">This site is powered by Netlify</a>
				<img src="../../public/assets/netlify.svg" />
			</div>
		</div>
	</footer>
</template>

<style lang="stylus">
.footer
	padding 2.5rem
	border-top 1px solid $borderColor
	text-align center
	.copyright
		font-size 0.9rem
		a
			color $textColor
			font-weight normal
			&:hover
				text-decoration underline
	.social
		margin 1rem 0
		a
			display inline-block
			margin 0 0.5rem
			white-space no-wrap
		.icon.outbound
			visibility hidden
		> :hover
			.material-design-icon
				color $accentColor
				&.discord-icon
					color $discordAccentColor
				&.twitter-icon
					color $twitterAccentColor
				&.facebook-icon
					color $facebookAccentColor
				&.reddit-icon
					color $redditAccentColor
				&.github-icon
					color $githubAccentColor
			.icon.outbound
				visibility visible
	.netlify
		margin-top 1rem
		font-size 0.8rem
		a
			color $accentColorSecondary
			&:hover
				color #24827a
		img
			-ms-transform rotate(360deg)
			-webkit-transform rotate(360deg)
			transform rotate(360deg)
			margin-bottom -2px
			width 1em
			height 1em

@media screen and (max-width $MQMobile)
	.footer
		.social
			.icon.outbound
				visibility visible
</style>
