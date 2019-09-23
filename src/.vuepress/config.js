module.exports = {
	title: 'Tachiyomi',
	description: 'Free and open source manga reader for Android.',
	dest: './public',
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
