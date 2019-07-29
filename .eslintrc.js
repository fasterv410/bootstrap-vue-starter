module.exports = {
  root: true,
  env: {
    'node': true
  },
  extends: [
    'plugin:vue/recommended',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/max-attributes-per-line': ['error',
      { singleline: 4 }
    ],
    'vue/html-closing-bracket-newline': ['error',
      { multiline: 'always' }
    ],
    'vue/html-closing-bracket-spacing': 'error',
    'vue/singleline-html-element-content-newline': 'off',
    'object-shorthand': ['error', 'always',
      { avoidQuotes: false }
    ],
    'vue/require-default-prop': 'off'
  },
  parserOptions: {
    'parser': 'babel-eslint'
  }
}
