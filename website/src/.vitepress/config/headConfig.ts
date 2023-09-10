import type { HeadConfig } from "vitepress"

const headConfig: HeadConfig[] = [
	["meta", { name: "darkreader-lock" }],

	["meta", { name: "theme-color", content: "#818CF8" }],
	["meta", { name: "msapplication-TileColor", content: "#818CF8" }],

	["meta", { name: "viewport", content: "width=device-width, initial-scale=1.0" }],
	["meta", { name: "referrer", content: "no-referrer-when-downgrade" }],

	["link", { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
	[
		"link",
		{
			rel: "icon",
			type: "image/png",
			sizes: "32x32",
			href: "/favicon-32x32.png",
		},
	],
	[
		"link",
		{
			rel: "icon",
			type: "image/png",
			sizes: "16x16",
			href: "/favicon-16x16.png",
		},
	],
	["link", { rel: "manifest", href: "/site.webmanifest" }],
	["link", { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#818CF8" }],
	[
		"link",
		{
			rel: "apple-touch-icon",
			type: "image/x-icon",
			sizes: "180x180",
			href: "/favicon.ico",
		},
	],

	["meta", { name: "twitter:card", content: "summary" }],
	["meta", { name: "twitter:site", content: "@tachiyomiorg" }],
	["meta", { name: "twitter:creator", content: "@tachiyomiorg" }],

	["meta", { property: "og:site_name", content: "Tachiyomi" }],
	[
		"meta",
		{
			property: "og:description",
			content: "Discover and read manga, webtoons, comics, and more – easier than ever on your Android device.",
		},
	],
	["meta", { property: "og:locale", content: "en_US" }],
	["meta", { property: "og:type", content: "website" }],
]

export default headConfig
