import { defineConfig, loadEnv } from "vitepress";

import markdown from "./markdown";
import themeConfig from "./theme";
import head from "./head";

import "./icons";

import generateMeta from "./hooks/generateMeta";
import generateSitemap from "./hooks/generateSitemap";
import generateFeed from "./hooks/generateFeed";

const hostname: string = "https://kodo.moe";

export default ({ mode }) => {
	process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

	return defineConfig({
		appearance: "dark",
		lastUpdated: true,
		cleanUrls: true,
		base: process.env.VITE_BASE || "/",
		lang: "en-US",
		title: "Tachiyomi",
		description: "Read your favorite manga, webtoons, comics, and more – easier than ever on your Android.",
		head,
		markdown,
		themeConfig: themeConfig,
		transformHead: async (context) => generateMeta(context, hostname),
		buildEnd: async (context) => {
			generateSitemap(context, hostname);
			generateFeed(context, hostname);
		},
	});
};
