/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
    screens: {
      pc: "769px",
      // => @media (min-width: 769px) { ... }
      tablet: { max: "1024px" },
      // => @media (max-width: 1024px) { ... }
      sp: { max: "768px" },
      // => @media (max-width: 768px) { ... }
    },
  },
  plugins: [],
};
