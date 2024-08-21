/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        exo: ['Exo 2', 'sans-serif'], // Replace 'Exo 2' with the actual font name if different
      }
    },
  },
  plugins: [daisyui,],
}

