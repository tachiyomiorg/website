module.exports = {
	dest: './public',
	temp: './node_modules/.temp/theme',

	title: 'Tachiyomi',
	description: 'Free and open source manga reader for Android',

	// prettier-ignore
	head: [
		// PWA headers
		['link', { rel: 'icon', href: '/favicon.ico' }],
		['link', { rel: 'manifest', href: '/manifest.json' }],
		['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
		['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#2e84bf' }],
		['meta', { prefix: 'og: http://ogp.me/ns#', property: 'og:image', content: 'https://tachiyomi.org/icons/logo.png' }],
		['meta', { name: 'theme-color', content: '#2e84bf' }],
		['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
		['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
		['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
		['meta', { name: 'msapplication-TileColor', content: '#2e84bf' }],
		// Custom headers
		['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin:''}],
		['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans'}],
	],

	themeConfig: {
		logo: '/icons/logo.svg',
		repo: 'inorichi/tachiyomi',
		docsRepo: 'tachiyomiorg/website',
		docsDir: 'src',
		algolia: {
			apiKey: 'fc1c45b5a3835e1882cbbf0751dfe705',
			indexName: 'tachiyomi'
		},
		searchPlaceholder: 'Search...',
		editLinks: true,
		editLinkText: 'Help us improve this page',
		lastUpdated: 'Last Updated',
		nav: require('./config/nav'),
		sidebar: {
			'/help/guides/': require('./config/sidebar/guides'),
			'/help/faq/': require('./config/sidebar/faq'),
			'/help/contribution': require('./config/sidebar/contribution'),
			'/extensions': require('./config/sidebar/extensions'),
			'/forks': require('./config/sidebar/forks')
		}
	},
	plugins: require('./config/plugins'),
	extraWatchFiles: [
		'.vuepress/config/nav.js',
		'.vuepress/config/plugins.js',
		'.vuepress/config/sidebar/guides.js',
		'.vuepress/config/sidebar/faq.js',
		'.vuepress/config/sidebar/contribution.js',
		'.vuepress/config/sidebar/extensions.js'
	]
}
