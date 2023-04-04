/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F5F5F5",
        secondary: "#B9E937",
        third: "#00B906",
        fourth: "#424242",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },

      animation: {
        shake: "shake 0.5s",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
    },
    keyframes: {
      shake: {
        "0%, 100%": { transform: "translateX(0)" },
        "25%": { transform: "translateX(-10px) rotate(-5deg)" },
        "50%": { transform: "translateX(10px) rotate(5deg)" },
        "75%": { transform: "translateX(-10px) rotate(-5deg)" },
      },
    },
  },
  plugins: [],
};
