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
					'/help/guides/source-problems'
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
			}
		]
	},
	'/extensions/'
];
