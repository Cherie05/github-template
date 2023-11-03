/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      sm: '480px',
      md: '768px',
      lg: '1020px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        sans: ['Rubik', 'sans-serif'],
      },
      colors:{
        darkest: '#010409',
        black20:'#161b22',
        graydark:'#727a84',
        graydarkest:'#3d4852',
        graydarker:'#0d1117',
        black10:'#161b22',

    },
    fontFamily: {
    apple: ['Inconsolata', ' monospace'],
    },
    },
  },
  plugins: [],
}

