import type { MarkdownOptions } from 'vitepress'

import { attrs } from '@mdit/plugin-attrs'
import { figure } from '@mdit/plugin-figure'
import { imgLazyload } from '@mdit/plugin-img-lazyload'
import { imgMark } from '@mdit/plugin-img-mark'
import { imgSize } from '@mdit/plugin-img-size'
import { include } from '@mdit/plugin-include'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'
import shortcode_plugin from 'markdown-it-shortcode-tag'
import shortcodes from './shortcodes'

const markdownConfig: MarkdownOptions = {
  config: (md) => {
    md
      .use(attrs)
      .use(figure)
      .use(imgLazyload)
      .use(imgMark)
      .use(imgSize)
      .use(include, {
        currentPath: env => env.filePath,
      })
      .use(tabsMarkdownPlugin)
      .use(shortcode_plugin, shortcodes)
  },
}

export default markdownConfig
