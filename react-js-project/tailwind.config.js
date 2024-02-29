/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      colors:{
        'neutraalSilver': '#F5F7FA',
        'neutraalGrey': '#4D4D4D',
        'brandPrimary': '#4CAF4F',
        'neutraalGrey': '#717171',
      }
    },
  },
  plugins: [ require('flowbite/plugin'),],
}

