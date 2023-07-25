import { createContentLoader } from "vitepress";
import type { SiteConfig } from "vitepress";

import { createWriteStream } from "node:fs";
import { resolve } from "node:path";
import { SitemapStream } from "sitemap";

const generateSitemap = async (context: SiteConfig, hostname: string) => {
	const { outDir } = context;

	const sitemap = new SitemapStream({ hostname: hostname });
	const pages = await createContentLoader("**/*.md").load();
	const writeStream = createWriteStream(resolve(outDir, "sitemap.xml"));

	sitemap.pipe(writeStream);
	pages.forEach((page) => sitemap.write(page.url.replace(/index$/g, "").replace(/^\/src/, "")));
	sitemap.end();

	await new Promise((r) => writeStream.on("finish", r));
};

export default generateSitemap;
