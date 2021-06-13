<template>
	<div v-if="item" class="extension">
		<a
			:href="`#${item.pkg.replace('eu.kanade.tachiyomi.extension.', '')}`"
			class="header-anchor"
			aria-hidden="true"
			@click.stop
		>
			#
		</a>
		<img class="extension-icon" :data-src="iconUrl(item.apk)" width="42" height="42" />
		<div class="extension-text">
			<div class="upper">
				<span class="font-semibold">{{ item.name.split(": ")[1] }}</span>
				<Badge :text="'v' + item.version" />
			</div>
			<div class="down">
				{{ item.pkg.replace("eu.kanade.tachiyomi.extension.", "") }}
			</div>
		</div>
		<a :href="apkUrl(item.apk)" class="extension-download" title="Download APK" download>
			<MaterialIcon icon="cloud_download" />
			<span>Download</span>
		</a>
	</div>
</template>
<script>
export default {
	props: ["item", "observer"],
	created() {
		window.addEventListener("scroll", this.handleScroll);
	},
	mounted() {
		this.observer.observe(this.$el);
	},
	destroyed() {
		window.removeEventListener("scroll", this.handleScroll);
	},
	methods: {
		iconUrl(pkg) {
			const pkgName = pkg.substring(0, pkg.lastIndexOf("."));
			return `https://raw.githubusercontent.com/tachiyomiorg/tachiyomi-extensions/repo/icon/${pkgName}.png`;
		},
		apkUrl: (apk) => `https://raw.githubusercontent.com/tachiyomiorg/tachiyomi-extensions/repo/apk/${apk}`,
		handleScroll(event) {
			this.observer.observe(this.$el);
		},
	},
};
</script>
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
</style>
