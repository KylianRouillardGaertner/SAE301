/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend:
    {
      fontFamily: {
      'Roboto': ['Roboto', 'sans-serif']
    },
    maxWidth: {
      'xxs': '17rem',
    },
    colors: {
      primary: '#E5E9F1',
      secondary: '#4E5B68',
      btn: '#0F62FE',
      btn_hover: '#0D419D',
      personalisation: '#BCC1C8'
    }
  },
},
  plugins: [],
}

