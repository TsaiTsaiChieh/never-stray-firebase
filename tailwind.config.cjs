/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-50': '#2EDFDF',
        'primary-100': '#61DED7',
        'primary-150': '#95EED9',
        'primary-200': '#00948B',
        'primary-250': '#3A6B68',
        'secondary-50': '#2D9CDB',
        'gray-i50': '#BDBDBD',
        'gray-i100': '#9FA0A0',
        'gray-i150': '#828282',
        'gray-i200': '#4F4F4F',
        'gray-i250': '#333333',
        'gray-t50': 'rgba(151, 151, 151, 0.3)',
      },
    },
  },
  plugins: [],
}
