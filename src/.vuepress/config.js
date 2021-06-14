const pluginsConfig = require("./config/plugins");
const navBarConfig = require("./config/navBar");
const sideBarConfig = require("./config/sideBar");

module.exports = {
	dest: "./public",
	temp: "./node_modules/.temp/theme",

	title: "Tachiyomi",
	description: "Free and open source manga reader for Android",

	// prettier-ignore
	head: [
		// Embed headers
		["link", { rel: "icon", href: "/favicon.ico" }],
		["meta", { name: "theme-color", content: "#2e84bf" }],
		["meta", { prefix: "og: http://ogp.me/ns#", property: "og:image", content: "https://tachiyomi.org/icons/logo.png" }],
		['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
		// Custom headers
		["link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin:""}],
		["link", { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Open+Sans"}],
		["script", {src: "/scripts/remove_service_worker.js"}],
	],

	themeConfig: {
		logo: "/icons/logo.svg",
		repo: "tachiyomiorg/tachiyomi",
		docsRepo: "tachiyomiorg/website",
		docsDir: "src",
		smoothScroll: true,
		algolia: {
			apiKey: "fc1c45b5a3835e1882cbbf0751dfe705",
			indexName: "tachiyomi",
		},
		searchPlaceholder: "Search...",
		editLinks: true,
		editLinkText: "Help us improve this page",
		lastUpdated: "Last updated",
		nav: navBarConfig,
		sidebar: {
			"/help/guides/": sideBarConfig.default,
			"/help/faq/": sideBarConfig.default,
			"/help/contribution": sideBarConfig.default,
			"/extensions": sideBarConfig.default,
			"/forks": sideBarConfig.default,
			"/sandbox": sideBarConfig.sandbox,
		},
	},
	plugins: pluginsConfig,
	extraWatchFiles: [".vuepress/config/plugins.js", ".vuepress/config/navBar.js", ".vuepress/config/sideBar.js"],
};
