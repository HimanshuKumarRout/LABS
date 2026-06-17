import js from '@eslint/js'
import globals from 'globals'
import importX from 'eslint-plugin-import-x'

export default [
  { ignores: ['node_modules', 'generated'] },
  js.configs.recommended,
  importX.flatConfigs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      globals: { ...globals.node, ...globals.es2022 },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      'no-console': 'warn',
      eqeqeq: ['error', 'always'],
      curly: ['error', 'all'],
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-duplicate-imports': 'error',
      'import-x/no-unresolved': ['error', { ignore: ['\\./generated/'] }],
      'import-x/no-named-as-default': 'off',
      'import-x/no-named-as-default-member': 'off',
    },
  },
]
