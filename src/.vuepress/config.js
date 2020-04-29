module.exports = {
	title: 'Tachiyomi',
	description: 'Free and open source manga reader for Android.',
	dest: './public',
	head: [
		['link', { rel: "preconnect", href: 'https://fonts.gstatic.com', crossorigin:""} , ''],
		['link', { rel: "stylesheet", href: 'https://fonts.googleapis.com/css?family=Open+Sans'} , ''],
	],
	themeConfig: {
		repo: 'inorichi/tachiyomi',
		docsRepo: 'tachiyomiorg/website',
		docsDir: 'src',
		logo: '/assets/media/logo.svg',
		editLinks: true,
		editLinkText: 'Help us improve this page',
		nav: require('./config/nav'),
		sidebar: {
			'/help/guides/': require('./config/sidebar/guides'),
			'/help/faq/': require('./config/sidebar/faq'),
			'/help/contribution': require('./config/sidebar/contribution'),
			'/extensions': require('./config/sidebar/extensions'),
			'/forks': require('./config/sidebar/forks')
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
