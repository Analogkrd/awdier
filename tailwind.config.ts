/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#00b8e0', // light blue
        secondary: '#92c343', // green
        tertiary: '#bb9e6b', // brown
        quaternary: '#fff798', // yellow
      },
      fontFamily: {
        arabic: ["var(--font-arabic)", ...fontFamily.sans],
        sans: ["var(--font-english)", ...fontFamily.sans],
      },
    },
  },
  plugins: ['tailwindcss-animate'],
};
