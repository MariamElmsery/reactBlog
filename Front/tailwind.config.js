/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  themes: {
    extend: ["light", "dark", "cupcake","sunset"],
  },
  plugins:  [require("daisyui")],
 
}

