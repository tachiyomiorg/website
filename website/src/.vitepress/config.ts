import { defineConfig } from "vitepress";

import markdownConfig from "./config/markdownConfig"; // For use with loading Markdown plugins
import themeConfig from "./config/themeConfig"; // Theme related config
import headConfig from "./config/headConfig"; // Provides how to generate Meta head tags

import generateMeta from "./config/hooks/generateMeta"; // Enhanced meta generation
import generateFeed from "./config/hooks/generateFeed"; // Allows generation of RSS feed

const title = "Tachiyomi";
const description = "Read your favorite manga, webtoons, comics, and more – easier than ever on your Android.";
const hostname: string = "https://kodo.moe";

export default defineConfig({
	lastUpdated: true,
	cleanUrls: true,
	title: title,
	description: description,
	sitemap: {
		hostname: hostname,
	},
	headConfig,
	markdownConfig,
	themeConfig: themeConfig,
	transformHead: async (context) => generateMeta(context, hostname),
	buildEnd: async (context) => {
		generateFeed(context, hostname);
	},
});
