import type { DefaultTheme } from "vitepress";

const nav: DefaultTheme.NavItem[] = [
	{
		text: "Documentation",
		link: "/docs/guides/getting-started",
		activeMatch: "/docs/",
	},
	{
		text: "{app_version}",
		activeMatch: "^/*?(download|changelogs)/*?$",
		items: [
			{
				text: "Download",
				link: "/download/",
			},
			{
				text: "Changelog",
				link: "/changelogs/#v{app_version}",
			},
			{
				text: "Contributing",
				link: "https://github.com/tachiyomiorg/tachiyomi/blob/master/CONTRIBUTING.md",
			},
		],
	},
];

export default nav;
