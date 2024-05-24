/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      content: {
        hitext: "url('./src/assets/HI.svg')",
        waves: "url('./src/assets/wave.svg')",
      },
    },
  },
  plugins: [],
}

