const ogPrefix = 'og: http://ogp.me/ns#';
const ogTitle = 'Tachiyomi';
const ogDescription = 'Free and open source manga reader for Android.';
const ogColor = '#2e84bf';

module.exports = {
	dest: './public',
	temp: './node_modules/.temp/theme',

	title: ogTitle,
	description: ogDescription,

	// prettier-ignore
	head: [
		['link', { rel: 'icon', href: '/favicon.ico' }],
		['link', { rel: 'manifest', href: '/manifest.json' }],
		['meta', { prefix: ogPrefix, property: 'og:url', content: 'https://tachiyomi.org/' }],
		['meta', { prefix: ogPrefix, property: 'og:image', content: 'https://tachiyomi.org/img/logo.png' }],
		['meta', { prefix: ogPrefix, property: 'og:type', content: 'website' }],
		['meta', { prefix: ogPrefix, property: 'og:title', content: ogTitle }],
		['meta', { prefix: ogPrefix, property: 'og:description', content: ogDescription }],
		['meta', { prefix: ogPrefix, property: 'twitter:title', content: ogTitle }],
		['meta', { name: 'theme-color', content: ogColor }],
		['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
		['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
		['link', { rel: 'apple-touch-icon', href: `/img/apple-touch-icon.png` }],
		['link', { rel: 'mask-icon', href: '/img/safari-pinned-tab.svg', color: ogColor }],
		['meta', { name: 'msapplication-TileImage', content: '/img/mstile-150x150.png' }],
		['meta', { name: 'msapplication-TileColor', content: ogColor }],
		['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin:''}],
		['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans'}],
	],

	themeConfig: {
		logo: '/img/logo.svg',
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
