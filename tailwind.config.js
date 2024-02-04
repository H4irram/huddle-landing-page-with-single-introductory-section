/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      colors: {
        primaryClr: "hsl(257, 40%, 49%)",
        secondaryClr: "hsl(300, 69%, 71%)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};
