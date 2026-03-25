import astro from "eslint-plugin-astro";
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
];
