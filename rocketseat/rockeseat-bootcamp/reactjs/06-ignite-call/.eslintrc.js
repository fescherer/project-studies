// const tailwindConfig = require("./tailwind.config.ts")

module.exports = {
  root: true,
  extends: [
    '@rocketseat/eslint-config/react',
    'next/core-web-vitals',
    'plugin:tailwindcss/recommended',
  ],
  rules: {
    'tailwindcss/no-custom-classname': 'off',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js'],
      parser: '@typescript-eslint/parser',
    },
  ],
}
