/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/page.{js,ts,jsx,tsx}",
    "./src/app/**/page.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#EAC645",
        dark: "#303D4E",
        light: "#D4DADD",
      },
    },
  },
  plugins: [],
};
