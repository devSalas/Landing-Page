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
        layout:'64px 1fr',
        layoutCard:'repeat(auto-fill, minmax(16rem, 1fr))'
      },
      backgroundImage:{
       modal:' linear-gradient(to right top, #c147e9, #a244c6, #863fa4, #6a3883, #513162)'
      }
      ,
      colors:{
        blackp:'#fdee'
      }
    },
  },
  plugins: [],
}
