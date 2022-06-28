<script>
export default {
	props: ["item"],
	computed: {
		pkgId: function () {
			return this.item.pkg.replace("eu.kanade.tachiyomi.extension.", "");
		},
		pkgName: function () {
			return this.item.name.split(": ")[1];
		},
		pkgVersion: function () {
			return "v" + this.item.version;
		},
		iconUrl: function () {
			const pkgName = this.item.apk.substring(0, this.item.apk.lastIndexOf("."));
			return `https://raw.githubusercontent.com/tachiyomiorg/tachiyomi-extensions/repo/icon/${pkgName}.png`;
		},
		apkUrl: function () {
			return `https://raw.githubusercontent.com/tachiyomiorg/tachiyomi-extensions/repo/apk/${this.item.apk}`;
		},
	},
};
</script>
<template>
	<div v-if="item" class="extension">
		<a :href="`#${pkgId}`" class="header-anchor" aria-hidden="true" @click.stop>#</a>
		<img class="extension-icon" :src="iconUrl" loading="lazy" width="42" height="42" />
		<div class="extension-text">
			<div class="upper">
				{{ pkgName }}
				<Badge :text="pkgVersion" />
			</div>
			<div class="lower">
				{{ pkgId }}
			</div>
		</div>
		<a :href="apkUrl" class="extension-download" title="Download APK" download>
			<MaterialIcon icon="cloud_download" />
			<span>Download</span>
		</a>
	</div>
</template>
<style lang="stylus">
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
				font-weight: 600
				.badge
					font-weight: 400
					margin-left 8px
			.lower
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
			.extension-text .lower,
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
</style>
