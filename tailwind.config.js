/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        customGray: 'rgb(51, 51, 51)',
        boxShadow: {
          'purple-glow': '0 4px 14px 0 rgba(99, 34, 216, 0.39)',
        }
      },
    },
  },
  plugins: [],
}

