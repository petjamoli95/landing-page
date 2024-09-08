/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'karla': ['Karla', 'sans-serif'],
        'merriweather': ['Merriweather', 'serif'],
      },
      colors: {
        white: '#FFFFFF',
        grey: '#BFB8B0',
        red: '#FF5757',
        dark: '#3B3B3B'
      },
      spacing: {
        '128': '32rem',
      },
      width: {
        '128': '32rem',
      },
    },
  },
  plugins: [],
};
