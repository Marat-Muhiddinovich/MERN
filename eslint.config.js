import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { react: { version: '18.3' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'eslint-plugin-react-refresh': {
        ignore: ['^App$'],
      },
      'import/extensions': ['.js', '.jsx'],
      'import/no-extraneous-dependencies': [
        'error',
        { devDependencies: ['**/__tests__/**', '**/__mocks__/**', '**/jest.config.js'] },
      ],
      'import/no-unresolved': ['error', { ignore: ['^@/'] }],
      'import/prefer-default-export': 'off',
      'prettier/prettier': ['error', { singleQuote: true }],
      'jsx-a11y/anchor-is-valid': 'off',
      'jsx-a11y/click-events-have-key-events': 'off',
      'jsx-a11y/label-has-associated-control': [
        'error',
        { controlComponents: ['Form'], labelComponents: ['Label'] },
      ],
      'jsx-a11y/label-has-for': 'off',
      'jsx-a11y/role-has-required-aria-props': 'off',
      'jsx-a11y/role-supports-aria-props': 'off',
      'jsx-a.props.no-unused': 'off',
      'jsx-a11y/no-static-element-interactions': 'off',
      'jsx-a11y/anchor-has-content': 'off',
      'jsx-a11y/mouse-events-have-key-events': 'off',
      'jsx-a11y/no-noninteractive-element-interactions': 'off',
      'jsx-a11y/no-noninteractive-tabindex': 'off',
      'jsx-a11y/tabindex-no-positive': 'off',
      'jsx-a11y/anchor-has-content': 'off',
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
]
