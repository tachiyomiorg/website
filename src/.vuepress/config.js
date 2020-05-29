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
		// Custom headers
		["link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin:""}],
		["link", { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Open+Sans"}],
	],

	themeConfig: {
		logo: "/icons/logo.svg",
		repo: "inorichi/tachiyomi",
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
		lastUpdated: "Last Updated",
		nav: navBarConfig,
		sidebar: {
			"/help/guides/": sideBarConfig.guides,
			"/help/faq/": sideBarConfig.faq,
			"/help/contribution": sideBarConfig.contribution,
			"/extensions": sideBarConfig.extensions,
			"/forks": sideBarConfig.forks,
		},
	},
	plugins: pluginsConfig,
	extraWatchFiles: [
		".vuepress/config/plugins.js",
		".vuepress/config/navBar.js",
		".vuepress/config/sideBar.js",
	],
};
