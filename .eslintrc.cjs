"use strict";

/** @type {import('@typescript-eslint/utils').TSESLint.Linter.ConfigType} */
module.exports = {
  extends: [`plugin:deprecation/recommended`, `@ryb73`],

  overrides: [
    {
      files: [`src/all.ts`, `src/index.ts`, `src/exec.ts`, `src/query.ts`],
      rules: {
        "import/no-unused-modules": `off`,
      },
    },
  ],

  rules: {
    "no-explicit-type-exports/no-explicit-type-exports": `off`,
  },
};
