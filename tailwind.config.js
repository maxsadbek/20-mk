/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          yellow: '#E3C15D',
        },
        text: {
          primary: '#1a1a1a',
          secondary: '#4a4a4a',
        },
      },
      boxShadow: {
        soft: '0 2px 10px rgba(0, 0, 0, 0.06)',
      },
      borderRadius: {
        'pill': '25px',
        'input': '10px',
      },
    },
  },
  plugins: [],
}
