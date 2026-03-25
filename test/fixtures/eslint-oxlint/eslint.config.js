import astro from "eslint-plugin-astro";
import oxlint from "eslint-plugin-oxlint";
import tseslint from "typescript-eslint";

export default [
  ...tseslint.configs.recommended,
  ...astro.configs["flat/recommended"],
  {
    files: ["**/*.{js,ts,jsx,tsx,astro}"],
    rules: {
      "no-debugger": "error",
    },
  },
  ...oxlint.configs["flat/recommended"],
];
