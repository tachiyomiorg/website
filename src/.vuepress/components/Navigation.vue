<template>
	<span v-if="nav.link" id="NavigationVue" class="app-navigation" :class="nav.class" title="App navigation">
		<a class="app-link" :href="nav.link + entry">
			<MaterialIcon v-if="nav.icon" class="app-icon" :icon="nav.icon" />
			<span class="app-label" :class="nav.internalClass">{{ nav.text }}</span>
			<slot />
		</a>
	</span>
	<span v-else id="NavigationVue" class="app-navigation" :class="nav.class" title="App navigation">
		<MaterialIcon v-if="nav.icon" class="app-icon" :icon="nav.icon" />
		<span class="app-label" :class="nav.internalClass">{{ nav.text }}</span>
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
		entry: {
			type: String,
			default: "",
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
				browse: { text: "Browse", icon: "explore" },
				more: { text: "More", icon: "more_horiz" },
				/* Actions */
				update_library: { text: "Update library", icon: "refresh" },
				search: { text: "Search", icon: "search" },
				filter: { text: "Filter", icon: "filter_list" },
				edit: { text: "EDIT", icon:"edit" },
				delete: { text: "DELETE", icon:"delete" },
				/* More */
				downloaded_only: { text: "Downloaded only", icon: "cloud_off" },
				download_queue: { text: "Download queue", icon: "get_app" },
				categories: { text: "Categories", icon: "label" },
				settings: { text: "Settings", icon: "settings" },
				about: { text: "About", icon: "info" },
				help: { text: "Help", icon: "help" },
				source_migration: { text: "Source migration", icon: "compare_arrows" },
				/* Settings */
				settings_general: { text: "General", icon: "tune" },
				settings_library: { text: "Library", icon: "collections_bookmark" },
				settings_reader: { text: "Reader", icon: "chrome_reader_mode" },
				settings_downloads: { text: "Downloads", icon: "get_app" },
				settings_tracking: { text: "Tracking", icon: "autorenew" },
				settings_browse: { text: "Browse", icon: "explore" },
				settings_backup: { text: "Backup", icon: "backup" },
				settings_security: { text: "Security", icon: "security" },
				settings_advanced: { text: "Advanced", icon: "code" },
				/* Library info */
				bookmark: { text: "Add to library", icon: "favorite_border" },
				bookmarked: { text: "In library", icon: "favorite" },
				set_categories: { text: "Set categories", icon: "label" },
				share: { text: "Share", icon: "share" },
				webview: { text: "WebView", icon: "public" },
				/* Browse */
				button_latest: { text: "LATEST" },
				button_browse: { text: "BROWSE" },
				tab_sources: { text: "SOURCES" },
				tab_extensions: { text: "EXTENSIONS" },
				sources: { text: "Sources" },
				latest: { text: "Latest" },
				extensions: { text: "Extensions" },
				migrate: { text: "Migrate" },
				/* Misc */
				install: { text: "INSTALL", class:"ext-installation" },
				reorder: { text: "Reorder", icon:"reorder" },
				overflow: { text: "Overflow", icon:"more_vert" },
				/* Forks */
				neko: { text: "Neko", internalClass:"nav-tachiyomi_neko"},
				tachiyomij2k: { text: "TachiyomiJ2K", link:"/forks/Neko"},
				tachiyomiaz: { text: "TachiyomiAZ", link:"/forks/TachiyomiAZ"},
				tachiyomisy: { text: "TachiyomiSY", link:"/forks/TachiyomiSY"},
				tachiyomieh: { text: "TachiyomiEH", link:"/forks/TachiyomiEH"},
			}[this.item];
		},
	},
};
</script>

<style lang="stylus">
#NavigationVue
	&.app-navigation
		white-space pre
		font-size 0
		.app-icon,
		.app-label
			color darken($accentColor, 25%)
			font-weight 500
			font-size 1rem
		.app-icon
			vertical-align top
			padding-right 0.25rem
		.app-link
			&:hover
				cursor pointer
				text-decoration none !important
				.app-icon,
				.app-label
					color $accentColor
		.app-image
			max-height 1.5em
			vertical-align sub
		&:hover
			cursor default

blockquote
	.app-navigation
		.app-icon,
		.app-label
			color inherit !important
</style>
