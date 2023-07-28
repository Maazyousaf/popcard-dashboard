const { fontFamily } = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-inter)", ...fontFamily.sans],
      },
      colors: {
        primary: "#3F4254",
        secondary: "#A1A5B7",
        success: "#00BE24",
        danger: "#F14A4A",
        borderColor: "#CBD5E1",
        hoverColor: "#F3F6F9",
        yellow: "#FBBF24",
      },
      lineHeight: {
        0: 0,
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
  ],
};
