/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        'gray-dark': 'hsl(0, 0%, 41%)',
        black: 'hsl(0, 0%, 8%)'
      },
      fontFamily: {
        epilogue: ['Epilogue', 'sans-serif']
      },
      borderRadius: {
        xlg: '0.75rem'
      },
      content: {
        arrowDownIcon: 'url("/src/assets/icon-arrow-down.svg")',
        arrowUpIcon: 'url("/src/assets/icon-arrow-up.svg")'
      }
    }
  },
  plugins: []
};
