<template>
	<main class="home" aria-labelledby="main-title">
		<header class="hero">
			<img
				v-if="data.heroImage"
				:src="$withBase(data.heroImage)"
				:alt="data.heroAlt || 'hero'"
			>

			<h1 v-if="data.heroText !== null" id="main-title">{{ data.heroText || $title || 'Hello' }}</h1>

			<p class="description">
				{{ data.tagline || $description || 'Welcome to your VuePress site' }}
			</p>

			<p
				class="action"
				v-if="data.actionText && data.actionLink"
			>
				<a
					class="action-button"
					rel="noopener noreferrer"
					:href="browserDownloadUrl || null"
					title="Download latest release"
					download
				>
					<font-awesome-icon icon="download" />
					<span>Download {{ tagName || 'vX.X.X' }}</span>
				</a>

				<NavLink
					class="action-button secundary"
					:item="actionLink"
				/>
			</p>
		</header>

		<div
			class="features"
			v-if="data.features && data.features.length"
		>
			<div
				class="feature"
				v-for="(feature, index) in data.features"
				:key="index"
			>
				<h2>{{ feature.title }}</h2>
				<p>{{ feature.details }}</p>
			</div>
		</div>

		<Content class="theme-default-content custom"/>

		<footer
			class="footer"
			v-if="data.footer"
		>
			{{ data.footer }}
		</footer>
	</main>
</template>

<script>
import NavLink from '@parent-theme/components/NavLink.vue';

import axios from 'axios';

const RELEASE_URL = 'https://api.github.com/repos/inorichi/tachiyomi/releases/latest';

export default {
	components: { NavLink },

	data () {
		return {
			tagName: '',
			browserDownloadUrl: '',
		}
	},

	computed: {
		data () {
			return this.$page.frontmatter;
		},

		actionLink () {
			return {
				link: this.data.actionLink,
				text: this.data.actionText
			};
		}
	},

	async mounted () {
		const { data } = await axios.get(RELEASE_URL);
		// Maybe eventually some release has more than the apk in assets.
		const apkAsset = data.assets.find(a => a.name.includes('.apk'));
		// Set the values.
		this.$data.tagName = data.tag_name;
		this.$data.browserDownloadUrl = apkAsset.browser_download_url;
	}
}
</script>

<style lang="stylus">
// Use Stylus to use the layout variables.
.home {
	padding: $navbarHeight 2rem 0;
	max-width: 960px;
	margin: 0px auto;
	display: block;

	.hero {
		text-align: center;

		img {
			max-width: 100%;
			max-height: 280px;
			display: block;
			margin: 3rem auto 1.5rem;
		}

		h1 {
			font-size: 3rem;
		}

		h1, .description, .action {
			margin: 1.8rem auto;
		}

		.description {
			max-width: 35rem;
			font-size: 1.6rem;
			line-height: 1.3;
			color: lighten($textColor, 40%);
		}

		.action-button {
			display: inline-block;
			font-size: 1.2rem;
			color: #fff;
			background-color: $accentColor;
			padding: 0.8rem 1.6rem;
			border-radius: 4px;
			transition: background-color .1s ease;
			box-sizing: border-box;
			border-bottom: 1px solid darken($accentColor, 10%);

			&:hover {
				background-color: lighten($accentColor, 10%);
			}

			&.secundary {
				background-color: darken($borderColor, 5%);
				color: lighten($textColor, 25%);
				border-bottom-color: darken($borderColor, 15%);

				&:hover {
					background-color: lighten($borderColor, 5%);
				}
			}

			svg + span {
				margin-left: 0.5rem;
			}

			svg {
				height: 1em;
				width: 1em;
			}

			& + .action-button {
				margin-left: 0.5rem;
			}
		}
	}

	.features {
		border-top: 1px solid $borderColor;
		padding: 1.2rem 0;
		margin-top: 2.5rem;
		display: flex;
		flex-wrap: wrap;
		align-items: flex-start;
		align-content: stretch;
		justify-content: space-between;
	}

	.feature {
		flex-grow: 1;
		flex-basis: 30%;
		max-width: 30%;

		h2 {
			font-size: 1.4rem;
			font-weight: 500;
			border-bottom: none;
			padding-bottom: 0;
			color: lighten($textColor, 10%);
		}

		p {
			color: lighten($textColor, 25%);
		}
	}

	.footer {
		padding: 2.5rem;
		border-top: 1px solid $borderColor;
		text-align: center;
		color: lighten($textColor, 25%);
	}
}

@media (max-width: $MQMobile) {
	.home {
		.features {
			flex-direction: column;
		}

		.feature {
			max-width: 100%;
			padding: 0 2.5rem;
		}

		.hero {
			.action-button + .action-button {
				margin-left: 0;
				margin-top: 0.5rem;
			}
		}
	}
}

@media (max-width: $MQMobileNarrow) {
	.home {
		padding-left: 1.5rem;
		padding-right: 1.5rem;

		.hero {
			img {
				max-height: 210px;
				margin: 2rem auto 1.2rem;
			}

			h1 {
				font-size: 2rem;
			}

			h1, .description, .action {
				margin: 1.2rem auto;
			}

			.description {
				font-size: 1.2rem;
			}

			.action-button {
				font-size: 1rem;
				padding: 0.6rem 1.2rem;
			}

			.feature h2 {
				font-size: 1.25rem;
			}
		}
	}
}
</style>
