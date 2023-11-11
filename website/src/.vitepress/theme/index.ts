// https://vitepress.dev/guide/custom-theme
import DefaultTheme from 'vitepress/theme'

// Import Stylus files
import './styles/base.styl'

// Import Global plugins
import 'element-plus/theme-chalk/dark/css-vars.css'

import { VueQueryPlugin } from '@tanstack/vue-query'

import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'

// Import icon components
import { IconBugReport, IconDownload, IconNewspaperVariant } from '@iconify-prerendered/vue-mdi'

import analytics from './plugin/analytics'
import Layout from './Layout.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.use(VueQueryPlugin)
    enhanceAppWithTabs(app)
    app.component('IconDownload', IconDownload)
    app.component('IconNewspaperVariant', IconNewspaperVariant)
    app.component('IconBugReport', IconBugReport)
    analytics({ id: 'G-2CBXXM1Y86' })
  },
  Layout,
}
