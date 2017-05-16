module.exports = {
  env: {
    node: true,
    es6: true
  },
  rules: {
    quotes: [2, 'single'],
    semi: 2,
    'max-len': [1, 150, 2],
    'arrow-body-style': [1, 'as-needed'],
    'comma-dangle': [2, 'never'],
    'object-curly-spacing': 0,
    'no-console': 1,
    'no-confusing-arrow': 0,
    'no-param-reassign': [1, { props: false }],
    'no-underscore-dangle': [2, { allowAfterThis: true, allowAfterSuper: false }],
    'consistent-return': 1,
    'import/extensions': [2, 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    'import/no-extraneous-dependencies': 0
  },
  extends: 'airbnb',
  globals: {
    before: true,
    after: true,
    suite: true,
    bench: true,
    set: true
  }
};
