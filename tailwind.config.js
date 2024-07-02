/** @type {import('tailwindcss').Config} */

import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['"Inter"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "black-800": "#131319",
        "white-100": "#6b6c70",
        "white-150": "#7f8084",
        "white-200": "#c5c7ca",
        "white-250": "#35373b",
        "blue-primary": "#4a96ff",
      },
      backgroundImage: {
        "gradient-1":
          "linear-gradient(to bottom, #27292d, #27292d), linear-gradient(132deg, #969696, #343434 98%)",
        "gradient-2": "linear-gradient(132deg, #969696, #343434 98%)",
      },
    },
  },
  plugins: [],
};
