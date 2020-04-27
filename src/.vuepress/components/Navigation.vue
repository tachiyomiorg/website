<template>
	<span v-if="nav.link" class="app-navigation" title="App navigation">
		<a class="app-link" :href="nav.link">
			<MaterialIcon v-if="nav.icon" class="app-icon" :iconName="nav.icon" />
			<span class="app-label">{{ nav.text }}</span>
			<slot />
		</a>
	</span>
	<span v-else class="app-navigation" title="App navigation">
		<MaterialIcon v-if="nav.icon" class="app-icon" :iconName="nav.icon" />
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
			required: true,
		},
	},
	computed: {
		nav() {
			// prettier-ignore
			return {
				/* Menus */
				library: { text: "Library", icon: "collections_bookmark" },
				updates: { text: "Updates", icon: "new_releases" },
				history: { text: "History", icon: "history" },
				sources: { text: "Sources", icon: "explore" },
				more: { text: "More", icon: "more_horiz" },
				/* Actions */
				search: { text: "Search", icon: "search" },
				filter: { text: "Filter", icon: "filter_list" },
				update_library: { text: "Update library", icon: "refresh" },
				/* More */
				downloaded_only: { text: "Downloaded only", icon: "cloud_off" },
				extensions: { text: "Extensions", icon: "extension" },
				download_queue: { text: "Download queue", icon: "get_app" },
				source_migration: { text: "Source migration", icon: "compare_arrows" },
				settings: { text: "Settings", icon: "settings" },
				about: { text: "About", icon: "info" },
				help: { text: "Help", icon: "help" },
				/* Settings */
				settings_general: { text: "General", icon: "tune", link: "/help/guides/general" },
				settings_library: { text: "Library", icon: "collections_bookmark" },
				settings_reader: { text: "Reader", icon: "chrome_reader_mode", link: "/help/guides/reader" },
				settings_downloads: { text: "Downloads", icon: "get_app", link: "/help/guides/downloads" },
				settings_tracking: { text: "Tracking", icon: "autorenew", link: "/help/guides/tracking" },
				settings_backup: { text: "Backup", icon: "backup", link: "/help/guides/backup" },
				settings_security: { text: "Security", icon: "security" },
				settings_advanced: { text: "Advanced", icon: "code", link: "/help/guides/advanced" },
				/* Library info */
				bookmark: { text: "Add to library", icon: "favorite_border" },
				bookmarked: { text: "In library", icon: "favorite" },
				set_categories: { text: "Set categories", icon: "label" },
				share: { text: "Share", icon: "share" },
				webview: { text: "WebView", icon: "public" },
				/* Sources */
				latest: { text: "LATEST" },
				browse: { text: "BROWSE" },
			}[this.item];
		},
	},
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
	&:hover
		cursor default
</style>
