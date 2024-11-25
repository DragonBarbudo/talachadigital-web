module.exports = {
    content: [
        "./pages/**/*.{vue,js,ts}",
        "./components/**/*.{vue,js,ts}",
        "./nuxt.config.{js,ts}",
        "./node_modules/@nuxt/ui/dist/**/*.{js,vue,ts}",
        "./assets/css/**/*.css" // Add this if you use a custom CSS file
    ],
    theme: {
        extend: {
            colors: {
                tdgreen: '#D6FD18',
                tdpink: '#F21391',
                tdorange: '#FFB520',
                tdred: '#E02E2E',
                tdblue: '#3f0c92'
            },
            fontFamily: {
                nerko: "Nerko One",
                gochi: "Gochi Hand",
                just: "Just Another Hand",
                patrick: "Patrick Hand",
            },
            aspectRatio: {
                auto: 'auto',
                square: '1 / 1',
                video: '16 / 9'
              }
        }
    },
    plugins: [],
  }