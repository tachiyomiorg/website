import { getSidebar } from "vitepress-plugin-auto-sidebar";

const sidebar = {
	"/docs/": defaultSidebar(),
	"/forks/": defaultSidebar(),
	"/news/": getSidebar({
		contentRoot: "/src/",
		contentDirs: ["news"],
		collapsed: false,
	}),
};

function defaultSidebar() {
	return [
		{
			text: "Frequently Asked Questions",
			items: [
				{ text: "General", link: "/docs/faq/general" },
				{
					text: "Application",
					link: "/docs/faq/application/",
					collapsed: true,
					items: [
						{
							text: "Library",
							link: "/docs/faq/application/library",
						},
						{
							text: "Browse",
							link: "/docs/faq/application/browse/",
							collapsed: true,
							items: [
								{
									text: "Reading with Local Source",
									link: "/docs/faq/application/browse/reading-with-local-source",
								},
							],
						},
						{
							text: "Downloads",
							link: "/docs/faq/application/downloads",
						},
						{
							text: "Reader",
							link: "/docs/faq/application/reader",
						},
						{
							text: "User interface",
							link: "/docs/faq/application/user-interface",
						},
						{
							text: "Android 11+",
							link: "/docs/faq/application/android-11+",
						},
						{
							text: "Shizuku",
							link: "/docs/faq/application/shizuku",
						},
					],
				},
				{ text: "Extensions", link: "/docs/faq/extensions" },
				{ text: "Miscellaneous", link: "/docs/faq/miscellaneous" },
			],
		},
		{
			text: "Guides",
			items: [
				{
					text: "Getting started",
					link: "/docs/guides/getting-started",
				},
				{
					text: "Troubleshooting",
					link: "/docs/guides/troubleshooting/",
					collapsed: true,
					items: [
						{
							text: "Common issues",
							link: "/docs/guides/troubleshooting/common-issues",
						},
						{
							text: "Diagnosis",
							link: "/docs/guides/troubleshooting/diagnosis",
						},
					],
				},
				{
					text: "Source migration",
					link: "/docs/guides/source-migration",
				},
				{ text: "Backups", link: "/docs/guides/backups" },
				{ text: "Tracking", link: "/docs/guides/tracking" },
				{ text: "Categories", link: "/docs/guides/categories" },
				{ text: "Local manga", link: "/docs/guides/local-manga" },
				{
					text: "Reader settings",
					link: "/docs/guides/reader-settings",
				},
			],
		},
		{
			text: "Contribution",
			link: "/docs/contribution",
		},
		{
			text: "Download",
			link: "/download/",
		},
		{
			text: "Extensions",
			link: "/extensions/",
		},
		{
			text: "Forks",
			link: "/forks/",
		},
	];
}

export default sidebar;
