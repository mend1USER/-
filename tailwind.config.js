/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      //цвета которые мы обернули в переменные потому что это фича тайпскрипте почему бы не заюзать
      colors: {
        'movie-black': '#1d2024',
        'movie-black-200': '#1f2326',
        'movie-black-400': '#282c32',
        oranje: '#f37515'
      }
    }
  },
  plugins: []
}
