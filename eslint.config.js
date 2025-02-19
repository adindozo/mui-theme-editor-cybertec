import js from "@eslint/js";
import ts from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

export default [
  js.configs.recommended,
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tsParser
    },
    plugins: { ts, prettier: prettierPlugin },
    rules: {
      "prettier/prettier": "error",
      "ts/no-unused-vars": "warn"
    }
  },
  prettierConfig
];