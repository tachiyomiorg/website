module.exports = [
	[
		"vuepress-plugin-sitemap",
		{
			hostname: "https://tachiyomi.org",
		},
	],
	[
		"vuepress-plugin-robots",
		{
			host: "https://tachiyomi.org",
			allowAll: true,
			sitemap: "/sitemap.xml",
		},
	],
	["@vuepress/back-to-top"],
	[
		"@vuepress/google-analytics",
		{
			ga: "UA-148212082-1",
		},
	],
	[
		"@vuepress/active-header-links",
		{
			sidebarLinkSelector: ".sidebar-link",
			headerAnchorSelector: ".header-anchor",
		},
	],
	[
		"@vuepress/pwa",
		{
			serviceWorker: false,
		},
	],
	[
		"vuepress-plugin-clean-urls",
		{
			normalSuffix: "/",
		},
	],
	[
		"vuepress-plugin-zooming",
		{
			delay: 1000,
			options: {
				bgColor: "black",
				bgOpacity: "0.8",
			},
		},
	],
	["vuepress-plugin-element-ui"],
	[
		"vuepress-plugin-container",
		{
			type: "expander",
			before: (info) => `<details class="expander"><summary class="expansion">${info}</summary>`,
			after: "</details>",
		},
	],
	[
		"vuepress-plugin-container",
		{
			type: "guide",
			before: (info) => `<div class="guide"><p class="title">${info}</p>`,
			after: "</div>",
		},
	],
	[
		"vuepress-plugin-container",
		{
			type: "aside",
			defaultTitle: "",
		},
	],
	[
		"vuepress-plugin-container",
		{
			type: "aside-guide",
			defaultTitle: "",
		},
	],
];
