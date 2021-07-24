module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['react', 'react-hooks', 'import'],
  settings: {
    'import/resolver': {
      'babel-plugin-root-import': {
        rootPathSuffix: 'src',
      },
    },
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
  },
  rules: {
    semi: [2, 'never'],
    'no-extra-boolean-cast': 'off',
  },
}
