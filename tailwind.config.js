// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandDark: "#0F331E",
        brandRose: "#81586F",
        brandBeige: "#FFFDFB",
        brandLight: "#F5F9F6",
        brandForest: "#164F2A",
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
