/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#f42c37",
        secondary: "#f42c37",
        brandYellow: "#fdc62e",
        brandGreen: "#2dcc6f",
        brandBlue: "#1376f4",
        brandWhite: "#eeeeee",
        backgroundfromfigma: "#D9D9D9",
        button :"#0E47D9",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
      backgroundImage: {
        'custom-image': 'url(/src/assets/category/t.png)',
        'custom-image2': 'url(/src/assets/category/ic.png)',
    },
    screens: {
      'tablet' : "890px" ,
      'phone' : "600px" ,
      'laptop': '1024px',
      'desktop': '1280px'
    },
    fontFamily: {
      abc: ["Comfortaa" , "sans-serif"],
    },
    },
  },
  plugins: [],
};
