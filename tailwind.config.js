const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        mono: ["Source Code Pro", ...defaultTheme.fontFamily.mono]
      }
    }
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")]
};
