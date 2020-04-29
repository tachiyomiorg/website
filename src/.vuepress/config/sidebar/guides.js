module.exports = [
	'/',
	{
		title: 'Guides',
		collapsable: false,
		sidebarDepth: 2,
		children: [
			{
				title: 'General',
				collapsable: false,
				sidebarDepth: 2,
				children: [
					'/help/guides/getting-started',
					'/help/guides/source-problems',
					'/help/guides/source-migration',
					'/help/guides/creating-backups',
					'/help/guides/reading-local-manga',
					'/help/guides/categories'
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
					'/help/guides/advanced',
					'/help/guides/about'
				]
			}
		]
	},
	{
		title: 'Frequently Asked Questions',
		path: '/help/faq/',
	},
	{
		title: 'Forks',
		path: '/forks/'
	},
	{
		title: 'Contribution',
		path: '/help/contribution'
	},
	{
		title: 'Available extensions',
		path: '/extensions/'
	}
];
