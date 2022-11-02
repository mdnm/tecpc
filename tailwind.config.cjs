/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        indigo: {
          300: "#BEB2FB",
          800: "#130269",
        },
        green: {
          wpp: "#25D366",
        },
      },
    },
  },
  plugins: [],
};
