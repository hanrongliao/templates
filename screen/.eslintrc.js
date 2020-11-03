module.exports = {
  rules: {
    'no-param-reassign': 'off',
    'import/prefer-default-export': 'off',
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': 'off',
    'no-underscore-dangle': 'off',
    'no-plusplus': 'off',
    'max-len': 'off',
    'vue/no-use-v-if-with-v-for': 'off',
  },
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
};
