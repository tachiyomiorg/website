import type { DefaultTheme } from 'vitepress'

const nav: DefaultTheme.NavItem[] = [
  {
    text: 'Tachiyomi is no longer supported',
    link: '/news/2024-01-13-goodbye',
  },
  {
    text: 'Docs',
    link: '/docs/guides/getting-started',
    activeMatch: '/docs/',
  },
  {
    text: 'News',
    link: '/news/',
    activeMatch: '/news/',
  },
]

export default nav
