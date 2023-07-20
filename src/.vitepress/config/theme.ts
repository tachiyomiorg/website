import type { DefaultTheme } from "vitepress";

import nav from "./navigation/navbar";
import sidebar from "./navigation/sidebar";

const themeConfig: DefaultTheme.Config = {
	logo: "/img/logo-128px.png",

	nav: nav,
	sidebar: sidebar,

	outline: [2, 3],

	socialLinks: [
		{ icon: "github", link: "https://github.com/tachiyomiorg/tachiyomi" },
		{ icon: "twitter", link: "https://twitter.com/tachiyomiorg" },
		{ icon: "facebook", link: "https://facebook.com/tachiyomiorg" },
		{ icon: "discord", link: "https://discord.gg/tachiyomi" },
	],

	footer: {
		message:
			"<strong><a href='https://www.apache.org/licenses/LICENSE-2.0' target='_blank'>Open-source Apache Licensed</a></strong> | <strong><a href='./privacy'>Privacy policy</a></strong>",
		copyright: `Copyright © 2015 - ${new Date().getFullYear()} Javier Tomás`,
	},

	editLink: {
		pattern: "https://github.com/xhenos/kodo/edit/v3-vitepress/src/:path",
		text: "Help us improve this page",
	},

	lastUpdated: {
		text: "Last updated",
		formatOptions: {
			dateStyle: "long",
			timeStyle: "short",
		},
	},

	search: {
		provider: "local",
	},
};

export default themeConfig;
