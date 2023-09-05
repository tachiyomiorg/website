import { defineConfig, loadEnv } from "vitepress";

import markdownConfig from "./config/markdownConfig"; // For use with loading Markdown plugins
import themeConfig from "./config/themeConfig"; // Theme related config
import headConfig from "./config/headConfig"; // Provides how to generate Meta head tags

import generateMeta from "./config/hooks/generateMeta"; // Enhanced meta generation
import generateFeed from "./config/hooks/generateFeed"; // Allows generation of RSS feed
import generateOgImages from "./config/hooks/generateOgImages";

const title = "Tachiyomi";
const description = "Read your favorite manga, webtoons, comics, and more – easier than ever on your Android.";

const env = loadEnv("", process.cwd());
const hostname: string = env.VITE_HOSTNAME || "http://localhost:4173";

export default defineConfig({
	lastUpdated: true,
	cleanUrls: true,
	title: title,
	description: description,
	sitemap: {
		hostname: hostname,
	},
	head: headConfig,
	markdown: markdownConfig,
	themeConfig: themeConfig,
	transformHead: async (context) => generateMeta(context, hostname),
	buildEnd: async (context) => {
		generateFeed(context, hostname);
		generateOgImages(context);
	},
});
