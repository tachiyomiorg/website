module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
		node: true,
		"vue/setup-compiler-macros": true,
	},
	parser: "vue-eslint-parser",
	extends: [
		"plugin:vue/vue3-recommended",
		"plugin:@typescript-eslint/recommended",
		"standard",
	],
	parserOptions: {
		ecmaVersion: "latest",
		parser: "@typescript-eslint/parser",
		sourceType: "module",
	},
	plugins: [
		"vue",
		"@typescript-eslint",
	],
	rules: {
		"comma-dangle": ["error", "only-multiline"],
		quotes: ["error", "double"],
		indent: ["error", "tab"],
		"no-tabs": 0,
		"no-console": "off",
		"no-debugger": "off",
		"vue/multi-word-component-names": "off",
		"vue/comment-directive": "off",
		"no-unused-vars": "off",
		"vue/no-parsing-error": [
			2,
			{
				"x-invalid-end-tag": false,
				"missing-semicolon-after-character-reference": false,
			},
		],

		/* --ECMAScript 6 ES6-- */
		"no-useless-escape": "off",
		"no-unused-expressions": [
			"error",
			{ allowShortCircuit: true, allowTernary: true },
		],
	},
}
