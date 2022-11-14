module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "eslint-config-airbnb",
    "plugin:prettier/recommended",
    "plugin:import/typescript",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    ],
    "import/extensions": "off",
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": "error",
    "prettier/prettier": [
      // or whatever plugin that is causing the clash
      "error",
      {
        tabWidth: 2,
        endOfLine: "auto",
      },
    ],
  },
};
