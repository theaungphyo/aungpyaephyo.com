module.exports = {
  trailingComma: 'es5',
  semi: true,
  tabWidth: 2,
  singleQuote: true,
  jsxSingleQuote: true,
  plugins: [
    'prettier-plugin-tailwindcss',
    'prettier-plugin-css-order',
    'prettier-plugin-organize-imports',
    'prettier-plugin-packagejson',
  ],
  tailwindFunctions: ['clsx', 'cn', 'twMerge'],
};
