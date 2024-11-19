/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      sm: "340px",
      md: "540px",
      lg: "768px",
      xl: "1180px"
    },
    extend: {},
    fontFamily: {
      Mplus:["M PLUS Rounded 1c", "serif"],
      lacquer: ["Lacquer", "system-ui"],
      Neucha: ["Neucha", "cursive"],
      Cobin: ["Cabin", "sans-serif"]
    },
    container: {
      center: true,
      padding: { 
        DEFAULT: "15px",
        md: "32px"
      }
    }
  },
  plugins: [],
}

