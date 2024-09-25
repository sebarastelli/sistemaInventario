import globals from "globals";


export default [
  {files: ["**/*.js"], languageOptions: {sourceType: "commonjs"}},
  {languageOptions: { globals: globals.browser }},
  {
    "extends": ["eslint:recommended", "plugin:prettier/recommended"],
    "env": {
      "node": true,
      "es6": true
    },
    "rules": {
      "prettier/prettier": ["error", { "endOfLine": "auto" }]
    }
  }
];