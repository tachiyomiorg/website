const APP_VERSION = "0.14.6";

const nav = [
	{
		text: "Documentation",
		link: "/docs/guides/getting-started",
		activeMatch: "/docs/",
	},
	{
		text: APP_VERSION,
		activeMatch: "^/*?(download|changelogs)/*?$",
		items: [
			{
				text: "Download",
				link: "/download/",
			},
			{
				text: "Changelog",
				link: `/changelogs/#v${APP_VERSION}`,
			},
			{
				text: "Contributing",
				link: "https://github.com/tachiyomiorg/tachiyomi/blob/master/CONTRIBUTING.md",
			},
		],
	},
];

export default nav;
