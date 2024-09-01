export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
      },
      colors: {
        darkgray: "rgba(245, 245, 245, 1)",
        purpulColor: "#7366FF",
        blueColor: "rgb(0, 116, 217)",
        lightblueColor: "rgb(235,240,253)",
        shadowColor: "rgb(199 210 254)",
        redColor: "#rgb(220,53,69)",
        iconColor: "#7F7184",
        iconBgColor: "#EEEDEB",
        backColor: "#2b2b2a",
        shadowDark: "#e4e4e7",
        Secondary: "#8492A6", // text-secondary
      },
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require("tailwindcss-debug-screens"),
  ],
};
