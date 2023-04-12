/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)"],
      },
      colors: {
        "custom-white": "#f8f8f8",
        "custom-orange": "#ff4d30",
      },
      spacing: {
        "150%": "150%",
      },
    },
  },
  plugins: [],
};
