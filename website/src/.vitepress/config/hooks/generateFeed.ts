import path from "node:path"
import { writeFileSync } from "node:fs"
import { Feed } from "feed"
import { type SiteConfig, createContentLoader } from "vitepress"

async function generateFeed(config: SiteConfig, hostname: string) {
	const feed = new Feed({
		title: "Tachiyomi",
		description: "Read your favorite manga, webtoons, comics, and more – easier than ever on your Android.",
		id: hostname,
		link: hostname,
		language: "en",
		image: `${hostname}/img/logo.png`,
		favicon: `${hostname}/favicon.ico`,
		copyright: `Copyright © 2015 - ${new Date().getFullYear()} Javier Tomás`,
	})

	const posts = await createContentLoader("news/*.md", {
		excerpt: true,
		render: true,
	}).load()

	// Filter everything that"s not of type `article` (e.g. index.md)
	const filteredPosts = posts.filter((post) => post.frontmatter.type === "article")

	filteredPosts.sort((a, b) => +new Date(b.frontmatter.date as string) - +new Date(a.frontmatter.date as string))

	for (const { url, frontmatter, html } of filteredPosts) {
		const fullUrl = `${hostname}${url}`

		// Strip `&ZeroWidthSpace;` from `html` string
		const content = html?.replace(/&ZeroWidthSpace;/g, "")

		feed.addItem({
			title: frontmatter.title,
			id: fullUrl,
			link: fullUrl,
			// description: excerpt,
			description: frontmatter.description,
			content,
			date: frontmatter.date,
		})
	}

	writeFileSync(path.join(config.outDir, "feed.rss"), feed.rss2())
}

export default generateFeed
