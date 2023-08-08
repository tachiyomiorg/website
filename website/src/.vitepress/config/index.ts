import { defineConfig, loadEnv } from "vitepress";

import markdown from "./markdown";
import themeConfig from "./theme";
import head from "./head";

import "./icons";

import generateMeta from "./hooks/generateMeta";
import generateFeed from "./hooks/generateFeed";

export default ({ mode }) => {
	process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

	const baseUrl = process.env.VITE_HOSTNAME || "https://kodo.moe"
	const basePath = process.env.VITE_BASE || "/"

	const hostname: string = baseUrl + basePath.replace(/\/$/, "")

	return defineConfig({
		appearance: "dark",
		lastUpdated: true,
		cleanUrls: true,
		base: process.env.VITE_BASE || "/",
		lang: "en-US",
		title: "Tachiyomi",
		description: "Read your favorite manga, webtoons, comics, and more – easier than ever on your Android.",
		sitemap: {
			hostname: hostname,
		},
		head,
		markdown,
		themeConfig: themeConfig,
		transformHead: async (context) => generateMeta(context, hostname),
		buildEnd: async (context) => {
			generateFeed(context, hostname);
		},
	});
};
