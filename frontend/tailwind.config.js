/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bgIamge': "url('/extras/bgImage.jpg.jpg')",       
      }
    },
  },
  plugins: [],
}

