// .eslintrc.js
// https://github.com/sveltejs/eslint-plugin-svelte3#readme
module.exports = {
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module'
  },
  env: {
    es6: true,
    browser: true
  },
  plugins: [
    'svelte3'
  ],
  overrides: [
    {
      files: ['**/*.svelte'],
      processor: 'svelte3/svelte3'
    }
  ],
  rules: {
    // ...
  },
  settings: {
    // ...
  }
};