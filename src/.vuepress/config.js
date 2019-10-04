module.exports = {
	title: 'Tachiyomi',
	description: 'Free and open source manga reader for Android.',
	dest: './public',
	head: [
		['script', { src: 'https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js'} , ''],
		['link', { rel: "stylesheet", type: "text/css", href: 'https://unpkg.com/flickity@2/dist/flickity.min.css'} , ''],
		['link', { rel: "stylesheet", type: "text/css", href: '/assets/css/carousel.css'} , '']
	],
	themeConfig: {
		repo: 'inorichi/tachiyomi',
		docsRepo: 'tachiyomiorg/website',
		docsDir: 'src',
		editLinks: true,
		editLinkText: 'Help us improve this page',
		nav: require('./config/nav'),
		sidebar: {
			'/help/guides/': require('./config/sidebar/guides'),
			'/help/faq/': require('./config/sidebar/faq'),
			'/help/contribution': require('./config/sidebar/contribution'),
			'/extensions': require('./config/sidebar/extensions')
		},
		lastUpdated: 'Last Updated'
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
