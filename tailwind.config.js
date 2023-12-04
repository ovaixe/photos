/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        new: "calc(100vh - 300px)",
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
        "3xl": "0px 0px 500px rgba(116, 116, 116, 1), -0px -0px 500px rgba(116, 116, 116, 1)",
      },
    },
  },
  plugins: [],
};
