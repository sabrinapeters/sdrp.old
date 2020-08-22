const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Source Serif Pro", ...defaultTheme.fontFamily.serif],
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
