import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import importX from 'eslint-plugin-import-x'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  js.configs.recommended,
  reactHooks.configs.flat.recommended,
  reactRefresh.configs.vite,
  importX.flatConfigs.recommended,
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      globals: { ...globals.browser, ...globals.es2022 },
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    rules: {
      'no-console': 'warn',
      eqeqeq: ['error', 'always'],
      curly: ['error', 'all'],
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-duplicate-imports': 'error',
      'import-x/no-unresolved': 'error',
      'import-x/no-named-as-default': 'off',
      'import-x/no-named-as-default-member': 'off',
    },
  },
])
