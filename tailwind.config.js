/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
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


    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

