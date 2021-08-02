const {white, coolGray } = require("tailwindcss/colors");

module.exports = {
  purge: [],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        lightCard: {
          base: white,
          hover: coolGray[100]
        },
        darkCard:{
          base: "#424242",
          hover: "#4d4d4d"
        },
        
        darkMaterialBG:{
          base: "#212121"
        },
        lightMaterialBG: {
          base: '#e5e7eb'
        }
      }
    },
  },
  variants: {
    extend: {backgroundColor: []},
  },
  plugins: [],
}
