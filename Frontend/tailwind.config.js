/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // 'selector' hata ke 'class' rakha for Tailwind & daisyUI compatibility
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}
