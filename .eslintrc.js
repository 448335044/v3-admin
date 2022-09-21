const { off } = require('process')

const DOMGlobals = ['window', 'document']
const NodeGlobals = ['module', 'require']

module.exports = {
  root: true,
  env: {
    node: true,
    node: true,
    es6: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@typescript-eslint/no-var-requires': 0,
    'vue/multi-word-component-names': 'off',
    'vue/no-deprecated-v-is': 'off',
  },
}
