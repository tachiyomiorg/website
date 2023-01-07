module.exports = {
	env: {
		browser: true,
		es6: true,
	},

	overrides: [
		{
			files: ["*.js", "*.vue"],
			extends: ["vuepress", "prettier"],
			plugins: ["vue", "prettier"],

			parserOptions: {
				ecmaVersion: 2018,
				parser: "babel-eslint",
				sourceType: "module",
			},

			rules: {
				"prettier/prettier": [
					"error",
					{
						endOfLine: "auto",
					},
				],
				"import/no-unresolved": [
					2,
					{
						ignore: ["^@"],
					},
				],
				curly: ["error", "all"],
				"vue/multi-word-component-names": "off",
			},
		},
		{
			files: ["*.md"],
			parser: "eslint-plugin-markdownlint/parser",
			extends: ["plugin:markdownlint/recommended"],
			rules: {
				"markdownlint/md001": ["off"], // header hierarchy
				"markdownlint/md013": ["warn"], // line length limit
				"markdownlint/md024": ["off"], // no two headers with the same text
				"markdownlint/md025": ["error", { front_matter_title: "" }], // h1 != front matter title
				"markdownlint/md033": ["off"], // no inline html
				"markdownlint/md046": ["error", { style: "fenced" }], // code block style
			},
		},
	],
};
