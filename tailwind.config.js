/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xl: "1440px",
      },
      height: {
        22: "5.5rem",
        24: "6rem",
        26: "6.5rem",
        28: "7rem",
        30: "7.5rem",
      },
    },
  },
  plugins: [],
};
