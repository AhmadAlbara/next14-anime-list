/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        color: {
          primary: "#F2F2F2",
          secondary: "#181818",
          accent: "#8758FF",
          tertiary: "#5CB8E4",
          quaternary: "#FF5733",
          quinary: "#C70039",
          senary: "#900C3F",
          septenary: "#581845",
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
});
