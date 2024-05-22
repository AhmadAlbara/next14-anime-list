/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        color:{
          'primary':'#F2F2F2',
          'secondary':'#181818',
          'ascent':'#8758FF',
          'tertiary':'#5CB8E4'
        }
      },
    },
  },
  plugins: [],
  darkMode:'class'
};
