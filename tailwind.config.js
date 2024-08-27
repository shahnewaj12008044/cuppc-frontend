/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
import aspectRatio from "@tailwindcss/aspect-ratio";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        "9/16": "56.25%", // 16:9 aspect ratio
      },
      fontFamily: {
        exo: ["Exo 2", "sans-serif"], // Replace 'Exo 2' with the actual font name if different
      },
    },
  },
  plugins: [daisyui, aspectRatio],
};
