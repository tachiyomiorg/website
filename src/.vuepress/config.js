module.exports = {
	title: 'Tachiyomi',
	description: 'Free and open source manga reader for Android',
	dest: './public',
	themeConfig: {
		repo: 'inorichi/tachiyomi',
		docsRepo: 'tachiyomiorg/website',
		docsDir: 'src',
		editLinks: true,
		nav: [
			{ text: 'Guide', link: '/guide/' },
			{ text: 'FAQ', link: '/faq/' },
			{ text: 'Extensions', link: '/extensions/' },
			{ text: 'Wiki', link: 'https://github.com/inorichi/tachiyomi/wiki' },
			{ text: 'Discord', link: 'https://discord.gg/tachiyomi' }
		],
		sidebar: [
			'/',
			'/guide/',
			{
				title: 'FAQ',
				path: '/faq/',
				collapsable: false,
				children: ['/faq/application/', '/faq/extensions/']
			},
			'/extensions/'
		],
		lastUpdated: 'Last Updated'
	}
}
