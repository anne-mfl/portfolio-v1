/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'rubik': ['Rubik', 'sans-serif'],
        'commissioner': ['Commissioner', 'sans-serif'],
        'kumbhsans': ['Kumbhsans', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'epilogue': ['Epilogue', 'sans-serif'],
      },
      colors: {
        'beige': 'rgb(240 237 240)',
        'light-black': '#2D2D34'
      },
      // content: {
        // 'sun': 'url("./src/icons/sun.svg")',
        // 'moon': 'url("./src/images/moon.png")'
      // }
    },
  },
  plugins: [],
}
