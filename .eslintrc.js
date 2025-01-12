module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'arrow-parens': ['error', 'as-needed'],
    'import/prefer-default-export': 'off',
    'react/prop-types': 0,
    'react/jsx-props-no-spreading': 'off',
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: 'config/webpack.dev.js',
      },
    },
  },
};
