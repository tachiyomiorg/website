<template>
	<span class="app-navigation">
		<MaterialIcon class="app-icon" :icon-name="icon" />
		<span class="app-label">{{ text }}</span>
		<slot />
	</span>
</template>

<script>
export default {
	props: {
		item: {
			type: String,
			required: true
		}
	},
	computed: {
		icon() {
			return {
				/* Menus */
				library: "collections_bookmark",
				updates: "new_releases",
				history: "history",
				sources: "explore",
				more: "more_horiz",
				/* Actions */
				search: "search",
				filter: "filter_list",
				update_library: "refresh",
				/* More */
				downloaded_only: "cloud_off",
				extensions: "extension",
				download_queue: "get_app",
				source_migration: "compare_arrows",
				settings: "settings",
				about: "info",
				help: "help",
				/* Settings */
				settings_general: "tune",
				settings_library: "collections_bookmark",
				settings_reader: "chrome_reader_mode",
				settings_downloads: "get_app",
				settings_tracking: "autorenew",
				settings_backup: "backup",
				settings_security: "security",
				settings_advanced: "code",
				/* Library info */
				bookmark: "favorite_border",
				bookmarked: "favorite",
				set_categories: "label",
				share: "share",
				webview: "public"
			}[this.item];
		},
		text() {
			return {
				/* Menus */
				library: "Library",
				updates: "Updates",
				history: "History",
				sources: "Sources",
				more: "More",
				/* Actions */
				search: "Search",
				filter: "Filter",
				update_library: "Update library",
				/* More */
				downloaded_only: "Downloaded only",
				extensions: "Extensions",
				download_queue: "Download queue",
				source_migration: "Source migration",
				settings: "Settings",
				about: "About",
				help: "Help",
				/* Settings */
				settings_general: "General",
				settings_library: "Library",
				settings_reader: "Reader",
				settings_downloads: "Downloads",
				settings_tracking: "Tracking",
				settings_backup: "Backup",
				settings_security: "Security",
				settings_advanced: "Advanced",
				/* Library info */
				bookmark: "Add to library",
				bookmarked: "In library",
				set_categories: "Set categories",
				share: "Share",
				webview: "WebView",
				/* Sources */
				latest: "LATEST",
				browse: "BROWSE"
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
		vertical-align middle
	.material-icons
		margin-left 0px
		&:empty
			margin-left -5px !important
</style>
