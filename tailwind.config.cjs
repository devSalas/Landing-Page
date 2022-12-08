/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        layout: '64px 1fr',
      },
      gridTemplateColumns:{
        layout:'60% 30%',
        layoutCard:'repeat(auto-fill, minmax(16rem, 1fr))',
      },
      colors:{
        blackp:'#fdee'
      }
    },
  },
  plugins: [],
}
