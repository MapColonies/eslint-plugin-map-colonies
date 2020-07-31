module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:@typescript-eslint/recommended-requiring-type-checking'],
  plugins: ['import', '@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  rules: {
    '@typescript-eslint/array-type': ['error', { default: 'array' }],

    '@typescript-eslint/ban-ts-comment': 'error',

    '@typescript-eslint/ban-tslint-comment': 'error',

    '@typescript-eslint/ban-types': 'error',

    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],

    '@typescript-eslint/explicit-function-return-type': 'warn',

    '@typescript-eslint/explicit-member-accessibility': 'error',

    '@typescript-eslint/member-ordering': 'warn',

    '@typescript-eslint/method-signature-style': 'error',

    camelcase: 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'default',
        format: ['camelCase'],
      },

      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE'],
      },
      {
        selector: 'parameter',
        format: ['camelCase'],
        leadingUnderscore: 'allow',
      },

      {
        selector: 'memberLike',
        modifiers: ['private'],
        format: ['camelCase'],
        // leadingUnderscore: 'require',
      },

      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
    ],

    '@typescript-eslint/no-base-to-string': 'warn',

    '@typescript-eslint/no-confusing-non-null-assertion': 'error',

    '@typescript-eslint/no-extraneous-class': 'warn',

    '@typescript-eslint/no-throw-literal': 'error',

    // '@typescript-eslint/no-type-alias': check more

    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',

    '@typescript-eslint/no-unnecessary-condition': 'error',

    '@typescript-eslint/no-unnecessary-type-arguments': 'warn',

    '@typescript-eslint/prefer-literal-enum-member': 'error',

    '@typescript-eslint/prefer-nullish-coalescing': 'warn',

    '@typescript-eslint/prefer-optional-chain': 'warn',

    '@typescript-eslint/prefer-readonly': 'error',

    '@typescript-eslint/prefer-string-starts-ends-with': 'error',

    '@typescript-eslint/promise-function-async': 'error',

    '@typescript-eslint/require-array-sort-compare': 'warn',

    '@typescript-eslint/strict-boolean-expressions': 'warn',

    '@typescript-eslint/switch-exhaustiveness-check': 'error',

    '@typescript-eslint/no-magic-numbers': 'error',

    '@typescript-eslint/default-param-last': 'error',

    '@typescript-eslint/no-dupe-class-members': 'error',

    '@typescript-eslint/no-unused-expressions': 'error',

    '@typescript-eslint/return-await': 'error',
  },
};
