import path from 'node:path'
import { writeFileSync } from 'node:fs'
import { Feed, type Item } from 'feed'
import { type SiteConfig, createContentLoader } from 'vitepress'

async function generateFeed(config: SiteConfig, hostname: string) {
  const feed = new Feed({
    title: config.site.title,
    description: config.site.description,
    id: hostname,
    link: hostname,
    language: 'en',
    image: `${hostname}/img/logo.png`,
    favicon: `${hostname}/favicon.ico`,
    copyright: `Copyright © 2015 - ${new Date().getFullYear()} Javier Tomás`,
  })
  const json: Item[] = []

  const posts = await createContentLoader('news/*.md', {
    excerpt: true,
    render: true,
    includeSrc: true,
  }).load()

  // Filter everything that"s not of type `article` (e.g. index.md)
  const filteredPosts = posts.filter(post => post.frontmatter.type === 'article')

  filteredPosts.sort((a, b) => +new Date(b.frontmatter.date as string) - +new Date(a.frontmatter.date as string))

  for (const { url, frontmatter, html, src } of filteredPosts) {
    const fullUrl = `${hostname}${url}`

    // Strip `&ZeroWidthSpace;` from `html` string
    const content = (html ?? '')
      .replace(/&ZeroWidthSpace;/g, '')
      .replace(/<a href="(\/.*?)">/g, `<a href="${hostname}$1">`)

    const markdown = (src ?? '')
      .replace(/^---.*---/s, '')
      .replace(/]\((\/.*?)\)/g, `](${hostname}$1)`)
      .replace(/^# .*$/m, '')
      .trim()

    const post = {
      title: frontmatter.title,
      id: fullUrl,
      link: fullUrl,
      description: frontmatter.description,
      content,
      date: frontmatter.date,
    } satisfies Item

    feed.addItem(post)
    json.push({ ...post, content: markdown })
  }

  writeFileSync(path.join(config.outDir, 'feed.rss'), feed.rss2())
  writeFileSync(path.join(config.outDir, 'news.json'), JSON.stringify(json))
}

export default generateFeed
