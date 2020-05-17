module.exports = {
	dest: './public',
	temp: './node_modules/.temp/theme',

	title: 'Tachiyomi',
	description: 'Free and open source manga reader for Android',

	// prettier-ignore
	head: [
		// Embed headers
		['link', { rel: 'icon', href: '/favicon.ico' }],
		['link', { rel: 'manifest', href: '/manifest.json' }],
		['meta', { name: 'theme-color', content: '#2e84bf' }],
		['meta', { prefix: 'og: http://ogp.me/ns#', property: 'og:image', content: 'https://tachiyomi.org/icons/logo.png' }],
		// Custom headers
		['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin:''}],
		['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans'}],
	],

	themeConfig: {
		logo: '/icons/logo.svg',
		repo: 'inorichi/tachiyomi',
		docsRepo: 'tachiyomiorg/website',
		docsDir: 'src',
		smoothScroll: true,
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
