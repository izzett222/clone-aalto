const { fontFamily } = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // fontFamily: {
      //   sans: ['var(--font-inter)', ...fontFamily.sans],
      // },
      screens: {
        md: "900px",
        xl: "1200px"
      },
      colors: {
        primary: "#0058AD"
      },
      spacing: {
        open: "calc(100vh - 110px)",
        raised: "calc(100vh - 50px)"
      },
      minHeight: {
        open: "calc(100vh - 110px)",
        raised: "calc(100vh - 50px)"
      }
    },
  },
  plugins: [],
}
