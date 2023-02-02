/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      'gray-100': '#f2f2f2',
      'gray-200': '#d9d9d9',
      'gray-300': '#808080',
      'gray-400': '#333333',
      'gray-500': '#262626',
      'gray-600': '#1a1a1a',
      'gray-700': '#0d0d0d',

      'purple-500': '#8284fa',
      'purple-700': '#5e60ce',

      'blue-500': '#4ea8de',
      'blue-700': '#1e6f9f',

      'red-500': '#e25858',
    },

    fontFamily: {
      inter: [`'Inter', sans-serif`],
    },

    fontSize: {
      sm: ['12px', '1.4'],
      md: ['14px', '1.4'],
      lg: ['16px', '1.4'],
    },

    screens: {
      md: { max: '850px' },
    },
  },
  plugins: [],
}
