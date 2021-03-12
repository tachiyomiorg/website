<template>
	<div class="extension-list">
		<div v-for="extensionGroup in extensions" :key="extensionGroup[0].lang">
			<h3>
				{{ extensionGroup[0].lang === "en" ? simpleLangName(extensionGroup[0].lang) : langName(extensionGroup[0].lang) }}
				<span class="extensions-total">
					Total:
					<span class="extensions-total-sum">
						{{ extensions.reduce((sum, item) => sum + item.length, 0) }}
					</span>
				</span>
			</h3>
			<div
				v-for="extension in extensionGroup"
				:id="extension.pkg.replace('eu.kanade.tachiyomi.extension.', '')"
				:key="extension.apk"
				class="anchor"
			>
				<div class="extension">
					<a
						:href="`#${extension.pkg.replace('eu.kanade.tachiyomi.extension.', '')}`"
						class="header-anchor"
						aria-hidden="true"
						@click.stop
					>
						#
					</a>
					<img class="extension-icon" :src="iconUrl(extension.apk)" width="42" height="42" />
					<div class="extension-text">
						<div class="upper">
							<span class="font-semibold">{{ extension.name.split(": ")[1] }}</span>
							<Badge :text="'v' + extension.version" />
						</div>
						<div class="down">
							{{ extension.pkg.replace("eu.kanade.tachiyomi.extension.", "") }}
						</div>
					</div>
					<a :href="apkUrl(extension.apk)" class="extension-download" title="Download APK" download>
						<MaterialIcon icon="cloud_download" />
						<span>Download</span>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from "axios";
import groupBy from "lodash.groupby";
import ISO6391 from "iso-639-1";
import { GITHUB_EXTENSION_JSON } from "../constants";

export default {
	data() {
		return {
			extensions: [],
		};
	},

	async beforeMount() {
		const { data } = await axios.get(GITHUB_EXTENSION_JSON);
		const values = Object.values(groupBy(data, "lang"));
		values.sort((a, b) => {
			const langA = this.simpleLangName(a[0].lang);
			const langB = this.simpleLangName(b[0].lang);
			if (langA === "All" && langB === "English") {
				return -1;
			}
			if (langA === "English" && langB === "All") {
				return 1;
			}
			if (langA === "English") {
				return -1;
			}
			if (langB === "English") {
				return 1;
			}
			if (langA < langB) {
				return -1;
			}
			if (langA > langB) {
				return 1;
			}
			return 0;
		});
		this.$data.extensions = values;
	},

	updated() {
		if (window.location.hash) {
			window.location.replace(window.location.hash);
		}
	},

	methods: {
		simpleLangName: (code) => (code === "all" ? "All" : ISO6391.getName(code)),
		langName: (code) => (code === "all" ? "All" : `${ISO6391.getName(code)} (${ISO6391.getNativeName(code)})`),
		iconUrl(pkg) {
			const pkgName = pkg.substring(0, pkg.lastIndexOf("."));
			return `https://raw.githubusercontent.com/tachiyomiorg/tachiyomi-extensions/repo/icon/${pkgName}.png`;
		},
		apkUrl: (apk) => `https://raw.githubusercontent.com/tachiyomiorg/tachiyomi-extensions/repo/apk/${apk}`,
	},
};
</script>

<style lang="stylus">
.extension-list
	h3
		padding-bottom 0.75em
		border-bottom 1px solid $borderColor
	> div
		&:not(:first-of-type)
			.extensions-total
				display none

.extensions-total
	float right
	&-sum
		color $accentColor

.anchor
	margin-top -3.9em
	padding-bottom 0.2em
	padding-top 4.5em
	.extension
		align-items center
		display flex
		padding 0.4em 1.5em
		.header-anchor
			padding-left 0.2em
			padding-right 0.2em
			font-size 1.4em
			opacity 0
		&:hover .header-anchor
			opacity 1
		.extension-icon
			margin-right 0.5em
		.extension-text
			flex 1
			.upper
				.badge
					margin-left 8px
			.down
				color #6c757d
				font-family monospace
				font-size 0.9rem
		.extension-download
			margin-right 0.5em
			padding-left 1rem
			padding-right 1rem
			padding-top .5rem
			padding-bottom .5rem
			font-weight 700
			border-radius 4px
			color white
			background-color $accentColor
			border 1px solid $accentColor
			.material-icons
				color white
				max-width 18px
			&:hover
				background-color white
				color $accentColor
				text-decoration none
				.material-icons
					color $accentColor
		@media (max-width 767px)
			padding 0.4em 0em
			.extension-text .down,
			.extension-download span
				display none
	@media (max-width 767px)
		.extension
			border 1px solid $borderColor
			border-radius 8px

			.extension-download
				background-color $accentColor
	&:target
		.extension
			background-color $containerBackground
			border-radius 8px
			transition 500ms background-color
	&:first-child
		border-top 1px solid $borderColor
</style>
