module.exports = [
	[
		"clean-urls",
		{
			normalSuffix: "/"
		}
	],
	["@vuepress/back-to-top"],
	[
		"@vuepress/google-analytics",
		{
			ga: "UA-148212082-1"
		}
	],
	[
		"vuepress-plugin-container",
		{
			type: "expander",
			before: info =>
				`<details class="expander"><summary class="expansion">${info}</summary>`,
			after: "</details>"
		}
	],
	[
		"vuepress-plugin-container",
		{
			type: "guide",
			before: info => `<div class="guide"><p class="title">${info}</p>`,
			after: "</div>"
		}
	],
	[
		"vuepress-plugin-container",
		{
			type: "aside",
			defaultTitle: ""
		}
	]
];
