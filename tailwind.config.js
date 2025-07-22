// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#0F331E",
          rose: "#81586F",
          beige: "#FFFDFB",
          light: "#F5F9F6",
          forest: "#164F2A",
        },
      },
    },
  },
  plugins: [],
};
