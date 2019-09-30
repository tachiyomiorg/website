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
		nav: require('./config/nav'),
		sidebar: require('./config/sidebar'),
		lastUpdated: 'Last Updated'
	},
	plugins: require('./config/plugins'),
	extraWatchFiles: [
		'.vuepress/config/nav.js',
		'.vuepress/config/sidebar.js',
		'.vuepress/config/plugins.js'
	]
}
