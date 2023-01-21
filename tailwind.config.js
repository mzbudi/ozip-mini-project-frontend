/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto"],
        radio_canada: ["Radio Canada"],
      },
      colors: {
        primary: "#1E1E1E",
        price: "#FF0000",
        price_inactive: "#777777",
      },
    },
  },
  plugins: [],
};
