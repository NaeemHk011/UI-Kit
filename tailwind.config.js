/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      minHeight: {
        '6': '1.5rem',
        '8': '2rem',
        '10': '2.5rem',
      },
      height: {
        '6': '1.5rem',
        '8': '2rem',
        '10': '2.5rem',
      },
      colors: {
        primary: '#536BB8',
        'primary-light': '#6A80C4',
        'primary-dark': '#3F5190',
      },
    },
  },
  plugins: [],
};

