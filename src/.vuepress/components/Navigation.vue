<template>
	<span v-if="nav.link" class="app-navigation" title="App navigation">
		<a class="app-link" :href="nav.link">
			<MaterialIcon class="app-icon" :icon-name="nav.icon" />
			<span class="app-label">{{ nav.text }}</span>
			<slot />
		</a>
	</span>
	<span v-else class="app-navigation" title="App navigation">
		<MaterialIcon class="app-icon" :icon-name="nav.icon" />
		<span class="app-label">{{ nav.text }}</span>
		<slot />
	</span>
</template>

<script>
/**
 * Code example: <Navigation item="library"/>
 */
export default {
	props: {
		item: {
			type: String,
			required: true
		}
	},
	computed: {
		nav() {
			return {
				/* Menus */
				library: { icon:"collections_bookmark", text:"Library" },
				updates: { icon:"new_releases", text:"Updates" },
				history: { icon:"history", text:"History" },
				sources: { icon:"explore", text:"Sources" },
				more: { icon:"more_horiz", text:"More" },
				/* Actions */
				search: { icon:"search", text:"Search" },
				filter: { icon:"filter_list", text:"Filter" },
				update_library: { icon:"refresh", text:"Update library" },
				/* More */
				downloaded_only: { icon:"cloud_off", text:"Downloaded only" },
				extensions: { icon:"extension", text:"Extensions" },
				download_queue: { icon:"get_app", text:"Download queue" },
				source_migration: { icon:"compare_arrows", text:"Source migration" },
				settings: { icon:"settings", text:"Settings" },
				about: { icon:"info", text:"About" },
				help: { icon:"help", text:"Help" },
				/* Settings */
				settings_general: { icon:"tune", text:"General", link:"/help/guides/general" },
				settings_library: { icon:"collections_bookmark", text:"Library" },
				settings_reader: { icon:"chrome_reader_mode", text:"Reader", link:"/help/guides/reader" },
				settings_downloads: { icon:"get_app", text:"Downloads", link:"/help/guides/downloads" },
				settings_tracking: { icon:"autorenew", text:"Tracking", link:"/help/guides/tracking" },
				settings_backup: { icon:"backup", text:"Backup", link:"/help/guides/backup" },
				settings_security: { icon:"security", text:"Security" },
				settings_advanced: { icon:"code", text:"Advanced", link:"/help/guides/advanced" },
				/* Library info */
				bookmark: { icon:"favorite_border", text:"Add to library" },
				bookmarked: { icon:"favorite", text:"In library" },
				set_categories: { icon:"label", text:"Set categories" },
				share: { icon:"share", text:"Share" },
				webview: { icon:"public", text:"WebView" },
				/* Sources */
				latest: { text:"LATEST" },
				browse: { text:"BROWSE" },
			}[this.item];
		}
	}
};
</script>

<style lang="stylus">
.app-navigation
	white-space nowrap
	.app-icon,
	.app-label
		color $accentColorSecondary
		font-weight 500
		font-size 1em
	.app-icon
		vertical-align top
	.app-link
		&:hover
			cursor pointer
			text-decoration none !important
			.app-icon,
			.app-label
				color $accentColor
	.material-icons
		margin-left 0px
		&:empty
			margin-left -5px !important
	&:hover
		cursor default
</style>
