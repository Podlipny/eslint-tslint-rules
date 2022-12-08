module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb',
    'eslint:recommended',
  ],
  plugins: [
    '@babel',
    'import',
    'promise',
  ],
  env: {
    browser: true,
    jest: true,
  },
  globals: {
    describe: true,
    test: true,
    expect: true,
    it: true,
  },
  rules: {
    'no-undef': 'error',
    'arrow-parens': ['error', 'always'],
    'max-len': ['error', { code: 120, tabWidth: 2, ignoreUrls: true }],
    'implicit-arrow-linebreak': ['error', 'beside'],
    'no-shadow': 'off',
    'no-unused-expressions': 'off',
    'no-unused-vars': 'error',
    'no-constant-condition': 'off',
    'no-useless-constructor': 'warn',
    'no-multi-spaces': 'error',
    'comma-dangle': [
      'error',
      'always-multiline',
    ],
    indent: ['error', 2],
    'function-paren-newline': ['error', 'consistent'],
    quotes: ['error', 'single'],
    'object-curly-spacing': [
      'error',
      'always',
    ],
    semi: [
      'error',
      'never',
    ],
    'object-curly-newline': 'off',
    'space-before-function-paren': 0,
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
    ],
    // imports
    'import/no-cycle': 'error',
    'import-order-alphabetical/order': 'off',
    'import/order': ['error', { 'newlines-between': 'always' }],
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
  },
}
