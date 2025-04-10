/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'poppins': ['Poppins', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'lexend': ['Lexend', 'sans-serif'],
        'raleway': ['Raleway', 'sans-serif'],
        'geist': ['Geist', 'sans-serif'],
        'figtree': ['FigTree', 'sans-serif'],
        'inconsolata': ['Inconsolata', 'monospace'],
      }
    },
  },
  plugins: [],
}