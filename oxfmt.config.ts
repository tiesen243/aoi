import type { OxfmtConfig } from 'vite-plus/fmt'

export default {
  arrowParens: 'always',

  bracketSameLine: false,

  bracketSpacing: true,

  endOfLine: 'lf',

  ignorePatterns: [],

  jsxSingleQuote: true,

  printWidth: 80,

  proseWrap: 'never',

  quoteProps: 'as-needed',

  semi: false,

  singleQuote: true,

  sortImports: {
    groups: [
      'side_effect_style',
      'type-import',
      ['value-builtin', 'value-external'],
      'type-internal',
      'value-internal',
      ['type-parent', 'type-sibling', 'type-index'],
      ['value-parent', 'value-sibling', 'value-index'],
    ],
    ignoreCase: true,
    newlinesBetween: true,
    order: 'asc',
  },

  sortPackageJson: {
    sortScripts: true,
  },

  sortTailwindcss: {
    functions: ['clsx', 'cva', 'cn'],
    // stylesheet: './packages/ui/src/tailwind.css',
  },

  tabWidth: 2,

  trailingComma: 'es5',

  useTabs: false,
} satisfies OxfmtConfig
