module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "import/extensions": 0,
    "import/no-unresolved": 0,
    "react/jsx-filename-extension": 0,
    "import/prefer-default-export": 0,
    "import/no-extraneous-dependencies": [
      "error",
      { devDependencies: ["**/*.spec.ts", "**/*.spec.tsx"] },
    ],
  },
};
