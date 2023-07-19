import { defineConfig, loadEnv } from "vitepress";

// https://vitepress.dev/reference/site-config
export default ({ mode }) => {
	// Load app-level env vars to node-level env vars.
	process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

	return defineConfig({
		lang: "en-US",
		title: "Tachiyomi",
		description: "Free and open source manga reader for Android",

		lastUpdated: true,
		cleanUrls: true,

		// Base directory, enabling override ability needed for GitHub Pages
		base: process.env.VITE_BASE || "/",

		head: [
			[
				"meta",
				{
					name: "theme-color",
					content: "#818CF8"
				}
			]
		],

		themeConfig: {
			// https://vitepress.dev/reference/default-theme-config
			logo: "/logo.svg",

			nav: nav(),

			sidebar: {
				"/docs/": sidebarGuide(),
				"/forks/": sidebarGuide(),
			},

			footer: {
				message: "<strong><a href='https://www.apache.org/licenses/LICENSE-2.0' target='_blank'>Open-source Apache Licensed</a></strong> | <strong><a href='./privacy'>Privacy policy</a></strong>",
				copyright: `Copyright © 2015 - ${ new Date().getFullYear() } Javier Tomás`,
			},

			search: {
				provider: "local",
			},

			socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }],
		},
	});
};

function nav() {
	return [
		{
			text: "Documentation",
			link: "/docs/guides/getting-started",
			activeMatch: "/docs/",
		},
		{
			text: "0.14.6",
			items: [
				{
					text: "Download",
					link: "/download",
				},
				{
					text: "Changelog",
					link: "https://github.com/tachiyomiorg/tachiyomi/releases/latest",
				},
				{
					text: "Contributing",
					link: "https://github.com/tachiyomiorg/tachiyomi/blob/master/CONTRIBUTING.md",
				},
			],
		},
	];
}

function sidebarGuide() {
	return [
		{
			text: "Frequently Asked Questions",
			items: [
				{ text: "General", link: "/docs/faq/general" },
				{
					text: "Application",
					link: "/docs/faq/application/",
					collapsed: true,
					items: [
						{ text: "Library", link: "/docs/faq/application/library" },
						{
							text: "Browse",
							link: "/docs/faq/application/browse/",
							collapsed: true,
							items: [
								{
									text: "Reading with Local Source",
									link: "/docs/faq/application/browse/reading-with-local-source",
								},
							],
						},
						{ text: "Downloads", link: "/docs/faq/application/downloads" },
						{ text: "Reader", link: "/docs/faq/application/reader" },
						{ text: "User interface", link: "/docs/faq/application/user-interface" },
						{ text: "Android 11+", link: "/docs/faq/application/android-11+" },
						{ text: "Shizuku", link: "/docs/faq/application/shizuku" },
					],
				},
				{ text: "Extensions", link: "/docs/faq/extensions" },
				{ text: "Miscellaneous", link: "/docs/faq/miscellaneous" },
			],
		},
		{
			text: "Guides",
			items: [
				{ text: "Getting started", link: "/docs/guides/getting-started" },
				{ text: "Troubleshooting", link: "/docs/guides/troubleshooting" },
				{ text: "Source migration", link: "/docs/guides/source-migration" },
				{ text: "Backups", link: "/docs/guides/backups" },
				{ text: "Tracking", link: "/docs/guides/tracking" },
				{ text: "Categories", link: "/docs/guides/categories" },
				{ text: "Local manga", link: "/docs/guides/local-manga" },
				{ text: "Reader settings", link: "/docs/guides/reader-settings" },
			],
		},
		{
			text: "Contribution",
			link: "/docs/contribution",
		},
		{
			text: "Download",
			link: "/download",
		},
		{
			text: "Extensions",
			link: "/extensions",
		},
		{
			text: "Forks",
			link: "/forks/",
		},
	];
}
