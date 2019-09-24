module.exports = [
	[
		'@vuepress/back-to-top'
	],
	[
		'@vuepress/google-analytics',
		{
			'ga': 'UA-148212082-1'
		}
	],
	[
		'container',
		{
			type: 'expander',
			before: info => `<details class=\"expander_details\"><summary class=\"expander_summary\">${info}</summary>\n`,
			after: '</details>\n'
		}
	]
];
