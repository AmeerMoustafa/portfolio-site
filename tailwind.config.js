/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./scripts/*.js"],
  theme: {
    extend: {
      colors: {
        'dark-indigo': '#27374D',
        'navy-blue': '#526D82',
        'notgrey-grey': '#9DB2BF',
        'aliexpress-white': '#DDE6ED',
      },
      
      fontFamily: {
        'roboto': ["Roboto Mono", 'monospace'],
        'rubik': ['Rubik', 'sans-serif']
      },

      keyframes: {
        'open-menu': {
          '0%' : {transform: 'scaleY(0)'},
          '80%' : {transform: 'scaleY(1.2)'},
          '100%' : {transform: 'scaleY(1)'},
        },

        animation: {
          'open-menu': 'open-menu 0.5s ease-in-out forwards',
        }
      }


    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

