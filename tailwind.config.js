/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['MyFont', 'system-ui', 'sans-serif'],
        calendar: ['SabFont', 'MyFont', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
