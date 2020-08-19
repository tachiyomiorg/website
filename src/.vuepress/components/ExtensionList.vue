<template>
	<div>
		<div v-for="extensionGroup in extensions" :key="extensionGroup[0].lang">
			<h3>{{ langName(extensionGroup[0].lang) }}</h3>
			<div
				v-for="extension in extensionGroup"
				:id="extension.name.split(': ')[1]"
				:key="extension.apk"
				class="anchor"
			>
				<div class="extension">
					<a :href="`#${extension.name.split(': ')[1]}`" aria-hidden="true" class="header-anchor"># </a>
					<img :src="iconUrl(extension.apk)" width="42" height="42" />
					<div class="extension-text">
						<div class="upper">
							<span class="bold">{{ extension.name.split(": ")[1] }}</span>
							<Badge :text="'v' + extension.version" />
						</div>
						<div class="down">
							{{ extension.pkg }}
						</div>
					</div>
					<a :href="apkUrl(extension.apk)" class="button" title="Download APK" download>
						<MaterialIcon icon-name="cloud_download" />
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
import sortBy from "lodash.sortby";
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
		this.$data.extensions = sortBy(values, [(g) => this.langName(g[0].lang)]);
	},

	updated() {
		if (window.location.hash) {
			window.location.replace(window.location.hash);
		}
	},

	methods: {
		langName: (code) => (code === "all" ? "All" : `${ISO6391.getName(code)} (${ISO6391.getNativeName(code)})`),
		iconUrl(pkg) {
			const pkgName = pkg.substring(0, pkg.lastIndexOf("."));
			return `https://raw.githubusercontent.com/inorichi/tachiyomi-extensions/repo/icon/${pkgName}.png`;
		},
		apkUrl: (apk) => `https://raw.githubusercontent.com/inorichi/tachiyomi-extensions/repo/apk/${apk}`,
	},
};
</script>

<style lang="stylus">
.anchor
	margin-top -3.9em
	padding-top 3.9em
	.extension
		align-items center
		display flex
		padding 0.4em 0.2em
		.header-anchor
			font-size 1.2em
		&:hover .header-anchor
			opacity 1
		img
			margin-right 0.5em
		.extension-text
			flex 1
			.down
				color #6c757d
				font-family monospace
				font-size 0.8rem
		.button
			background-color #2e84bf
			border-bottom 1px solid #2977ac
			border-radius 4px
			box-sizing border-box
			color #fff
			display inline-block
			font-size 0.8em
			padding 0.5rem
			text-transform uppercase
			transition background-color 0.1s ease
			&:hover
				background-color #3992cf
				text-decoration none !important
			.material-holder
				color #fff
				+ span
					margin-left 0.25rem
		&:not(:last-child)
			border-bottom 1px solid #eaecef
		&:target
			.extension
				background #f1f8ff
		@media (max-width: 767px)
			.extension-text .down
			.button span
				display none
</style>
