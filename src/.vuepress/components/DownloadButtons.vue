<template>
	<div class="downloadContainer">
		<button class="downloadStableButton" @click="downloadStable">
			Stable
		</button>
		<button class="downloadDevButton" @click="downloadDev">
			Dev
		</button>
	</div>
</template>

<script>
import axios from "axios";

const RELEASE_URL =
	"https://api.github.com/repos/inorichi/tachiyomi/releases/latest";

export default {
	data() {
		return {
			tagName: "",
			browserDownloadUrl: ""
		};
	},

	async mounted() {
		const { data } = await axios.get(RELEASE_URL);
		// Maybe eventually some release has more than the apk in assets.
		const apkAsset = data.assets.find(a => a.name.includes(".apk"));
		// Set the values.
		this.$data.tagName = data.tag_name;
		this.$data.browserDownloadUrl = apkAsset.browser_download_url;
	},

	methods: {
		downloadStable() {
			window.location.assign(this.$data.browserDownloadUrl || RELEASE_URL);
			window.ga("send", "event", "Button", "Click", "Stable download");
		},
		downloadDev() {
			window.location.assign("http://tachiyomi.kanade.eu/latest");
			window.ga("send", "event", "Button", "Click", "Dev download");
		}
	}
};
</script>

<style lang="stylus">
.downloadContainer
	user-select none
	text-align center
	margin 0.3125rem
	.downloadStableButton
	.downloadDevButton
		border-style none
		padding 0.625 2em
		margin 0.3125rem
		border-radius $buttonBorderRadius
		font-family $buttonFontFamily
		font-size 1.125em
		color white
		height 3rem
		width 8.5rem
		&:focus
			outline none
			outline-style solid
		&:hover
			cursor pointer
			text-decoration none !important
			background-image linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))
	.downloadStableButton
		background-color $accentColor
	.downloadDevButton
		background-color $accentColorSecondary
</style>
