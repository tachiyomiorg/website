module.exports = {
	dest: './public',
	locales: {
		'/': {
			lang: 'en-US',
			title: 'Tachiyomi',
			description: 'Free and open source manga reader for Android'
		},
		'/pt/': {
			lang: 'pt-BR',
			title: 'Tachiyomi',
			description: 'Leitor de mangás gratuito e de código aberto para Android'
		}
	},
	themeConfig: {
		repo: 'inorichi/tachiyomi',
		docsRepo: 'tachiyomiorg/website',
		docsDir: 'src',
		editLinks: true,
		locales: {
			'/': {
				selectText: 'Languages',
				label: 'English',
				nav: [
					{ text: 'Guide', link: '/guide/' },
					{ text: 'FAQ', link: '/faq/' },
					{ text: 'Wiki', link: 'https://github.com/inorichi/tachiyomi/wiki' },
					{ text: 'Discord', link: 'https://discord.gg/tachiyomi'}
				],
				sidebar: [
					'/',
					'/guide/',
					'/faq/'
				],
				lastUpdated: 'Last Updated'
			},
			'/pt/': {
				selectText: 'Idiomas',
				label: 'Português (Brasil)',
				nav: [
					{ text: 'Guia', link: '/pt/guide/' },
					{ text: 'FAQ', link: '/faq/' },
					{ text: 'Wiki', link: 'https://github.com/inorichi/tachiyomi/wiki' },
					{ text: 'Discord', link: 'https://discord.gg/tachiyomi' }
				],
				sidebar: [
					'/pt/',
					'/pt/guide/',
					'/pt/faq/'
				],
				editLinkText: 'Edite esta página',
				lastUpdated: 'Atualizado em'
			}
		}
	}
}
