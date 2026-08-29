module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
  extends: ['eslint:recommended', 'plugin:react-hooks/recommended'],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  plugins: ['react', 'react-refresh'],
  rules: {
    'react/jsx-uses-vars': 'error',
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
  },
};
