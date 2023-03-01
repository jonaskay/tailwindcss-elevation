module.exports = {
  env: {
    commonjs: true,
    es6: true,
    mocha: true,
    node: true,
  },
  extends: ["standard", "plugin:prettier/recommended"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {},
};
