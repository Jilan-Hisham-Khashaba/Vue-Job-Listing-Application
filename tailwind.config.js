/** @type {import('tailwindcss').Config} */
export default {
  // In content => you put here files that you to watch for tailing classes
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'], // 1.entry point 2.folders & file extentions I want to watch
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"]
      },
      gridTemplateColumns: { // Class of grid to have split columns (70 & 30)
        '70/30': '70% 28%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

