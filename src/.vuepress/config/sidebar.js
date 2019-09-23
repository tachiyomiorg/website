module.exports = [
	'/',
	{
		title: 'Guides',
		sidebarDepth: 2,
		children: [
			{
				title: 'Regular',
				collapsable: false,
				sidebarDepth: 2,
				children: [
					'/help/guides/getting-started',
					'/help/guides/reading-local-manga',
					'/help/guides/source-problems',
					'/help/guides/categories',
					'/help/guides/library-filters',
					'/help/guides/source-migration'
				]
			},
			{
				title: 'Settings',
				collapsable: false,
				sidebarDepth: 2,
				children: [
					'/help/guides/general',
					'/help/guides/reader',
					'/help/guides/downloads',
					'/help/guides/tracking',
					'/help/guides/backup',
					'/help/guides/advanced'
				]
			}
		]
	},
	{
		title: 'Frequently Asked Questions',
		sidebarDepth: 2,
		children: [
			{
				title: 'Regular',
				collapsable: false,
				sidebarDepth: 2,
				children: [
					'/help/faq/application',
					'/help/faq/extensions'
				]
			},
			{
				title: 'Contribution',
				collapsable: false,
				sidebarDepth: 2,
				children: [
					'/help/faq/how-can-i-help'
				]
			}
		]
	},
	'/extensions/'
];
