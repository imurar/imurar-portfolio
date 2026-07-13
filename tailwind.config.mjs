/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        warm: {
          300: '#d4c5b8',
          400: '#c9b8a8',
          500: '#9d8b7e',
          600: '#7a6e68',
          700: '#5d5450',
          800: '#3d3835',
        },
      },
    },
  },
  plugins: [],
};
