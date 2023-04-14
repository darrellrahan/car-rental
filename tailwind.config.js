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
        "custom-grey": "#706f7b",
        "custom-maroon": "#721c24",
        "custom-pink": "#f8d7da",
        "light-grey": "#ccd7e6",
      },
      spacing: {
        "150%": "150%",
      },
      fontSize: {
        "3.2rem": "3.2rem",
      },
      boxShadow: {
        "orange-bottom": "0 10px 15px 0 rgba(255,83,48,.35);",
        "orange-bottom-hov": "0 10px 15px 0 rgba(255,83,48,.6);",
        "booking-box": "0 10px 20px 0 rgba(0,0,0,.1)",
      },
      backgroundImage: {
        "book-bg": "url('/images/book-bg.png')",
      },
      zIndex: {
        1000: "1000",
      },
    },
  },
  plugins: [],
};
