/** @type {import('tailwindcss').Config} */
import customColors from "./TailwindColors.config";
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: customColors,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
