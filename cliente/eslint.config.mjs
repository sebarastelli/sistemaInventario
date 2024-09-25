import globals from "globals";
import pluginReact from "eslint-plugin-react";


export default [
  {files: ["**/*.{js,mjs,cjs,jsx}"]},
  {languageOptions: { globals: globals.browser }},
  pluginReact.configs.flat.recommended,
  {
    "extends": [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:prettier/recommended"
    ],
    "env": {
      "browser": true,
      "es6": true
    },
    "settings": {
      "react": {
        "version": "detect"
      }
    },
    "rules": {
      "prettier/prettier": ["error", { "endOfLine": "auto" }]
    }
  }
];