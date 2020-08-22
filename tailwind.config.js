const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        mono: ["Source Code Pro", ...defaultTheme.fontFamily.mono]
      },
      screens: {
        dark: { raw: "(prefers-color-scheme: dark)" }
      }
    }
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")]
};
