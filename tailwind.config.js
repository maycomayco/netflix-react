/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#D81F26",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
