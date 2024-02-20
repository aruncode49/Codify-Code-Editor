/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#40A2E3",
        hover: "#1382cd",
      },
    },
  },
  plugins: [],
};
