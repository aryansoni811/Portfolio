/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#ff5710",
        secondary: "#bababa",
        accent: "#0634cc",
        "accent-hover": "#4d76ff",
      },
    },
  },
  plugins: [],
};
