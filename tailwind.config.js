/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#bb0102",
        secondary: "#54595f",
        accent: "#1d5197",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [
    function ({ addBase, theme }) {
      addBase({
        "h1, h2, h3, h4, h5, h6": {
          fontFamily: theme("fontFamily.montserrat"),
        },
        "body, p, span, a, button, input, li": {
          fontFamily: theme("fontFamily.roboto"),
        },
      });
    },
  ],
};
