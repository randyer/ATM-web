/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Lato: ["Lato"],
    },
    extend: {
      colors: {
        purple: "#9d71b3",
        red: "#ff0000",
      },
    },
    backgroundImage: {
      hero: "url('/orchid-black.jpg')",
    },
  },
  plugins: [],
};
