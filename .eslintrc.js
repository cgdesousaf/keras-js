module.exports = {
  env: {
    browser: true,
    node: true,
    mocha: true,
    es6: true
  },
  parser: 'babel-eslint',
  plugins: ['html'],
  rules: {
    'no-console': 0,
    'no-extra-semi': 0,
    'no-unused-vars': 0
  },
  parserOptions: {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "modules": true
    }
  },
  globals: {
    KerasJS: true,
    TEST_DATA: true,
    testGlobals: true,
    chai: true,
    performance: true,
    weblas: true,
    nnpack: true
  },
  extends: 'eslint:recommended'
}
