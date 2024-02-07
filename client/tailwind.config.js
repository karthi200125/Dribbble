/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/App.css"
  ],
  theme: {
    extend: {
      colors: {
        DeepSkyBlue: '#00bfff',
        RoyalBlue: '#4169e1',
      },
    },
  },
  plugins: [],
}