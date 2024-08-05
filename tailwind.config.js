/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens:{
      sm:"330px",
      md:"764px",
      lg:"986px",
      xl:"1440px"
    },
    extend: {

      fontFamily: {
        edu:[' Edu AU VIC WA NT Hand',' cursive;'],
      anton:["Anton SC"]
      },

animation:{

'spin-slow':'spin  3s linear infinite'
},
     colors:{
        crimson:"#FF5733"
      },
      screens:{
'xs':{'min':'320px','max':'640px'}
      }
    },
  },
  plugins: [],
}

