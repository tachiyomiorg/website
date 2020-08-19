module.exports = [
	["@vuepress/back-to-top"],
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
	[
		"clean-urls",
		{
			normalSuffix: "/",
		},
	],
	[
		"@vuepress/pwa",
		{
			serviceWorker: true,
			updatePopup: true,
		},
	],
	[
		"@vuepress/google-analytics",
		{
			ga: "UA-148212082-1",
		},
	],
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
	]
];
