/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Police principale du site
        sans: ['MyFont', 'system-ui', 'sans-serif'],

        // Police spécifique pour le calendrier
        calendar: ['SabFont', 'MyFont', 'system-ui'],
      },
    },
  },
  plugins: [],
}
