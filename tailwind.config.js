/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        new: "calc(100vh - 150px)",
      },
      keyframes: {
        wiggle: {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        wiggle: "wiggle .3s ease-in-out",
      },
      boxShadow: {
        "3xl": "0 0 80px 80px rgba(0, 0, 0, 1)",
      },
    },
  },
  plugins: [],
};
