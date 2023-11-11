import antfu from '@antfu/eslint-config'
import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat()

export default antfu({
  ignores: [
    '*.sh',
    '*.md',
    '*.woff',
    '*.ttf',
    '.vscode/**',
    '.idea/**',
    '.husky/**',
    '.local/**',
    'dist/**',
    'node_modules/**',
    '!docs/.vitepress/**',
    'docs/.vitepress/cache/**',
  ],

  typescript: true,
  vue: true,

  ...compat.config({
    rules: {
      'comma-dangle': ['error', 'only-multiline'],
      'quotes': 'off',
      'no-tabs': 'off',
      'arrow-parens': ['error', 'always'],
      '@typescript-eslint/quotes': [
        'error',
        'double',
        { avoidEscape: true },
      ],
      'indent': 'off',
      'semi': ['error', 'never'],
      '@typescript-eslint/indent': ['error', 'tab'],
      '@typescript-eslint/brace-style': ['error', '1tbs'],
      '@typescript-eslint/semi': ['error', 'never'],
      'vue/no-extra-parens': 'off',
      'vue/html-indent': ['error', 'tab'],
      'curly': ['error', 'all'],
      'brace-style': ['error', '1tbs'],
      'no-console': 'off',
      'no-debugger': 'off',
      'vue/multi-word-component-names': 'off',
      'vue/comment-directive': 'off',
      'no-unused-vars': 'off',
      'vue/no-parsing-error': [
        2,
        {
          'x-invalid-end-tag': false,
          'missing-semicolon-after-character-reference': false,
        },
      ],

      /* --ECMAScript 6 ES6-- */
      'no-useless-escape': 'off',
      'no-unused-expressions': [
        'error',
        { allowShortCircuit: true, allowTernary: true },
      ],
    },
  }),
})
