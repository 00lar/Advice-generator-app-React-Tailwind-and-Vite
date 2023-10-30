/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Primary1: "hsl(193, 38%, 86%)",
        Primary2: "hsl(150, 100%, 66%)",
        Neutral1: "hsl(217, 19%, 38%)",
        Neutral2: "hsl(217, 19%, 24%)",
        Neutral3: "hsl(218, 23%, 16%)",
      },
    },
  },
  plugins: [],
}