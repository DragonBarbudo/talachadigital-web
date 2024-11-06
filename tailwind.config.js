module.exports = {
    content: [
        "./pages/**/*.{vue,js,ts}",
        "./components/**/*.{vue,js,ts}",
        "./nuxt.config.{js,ts}", // Adds the Nuxt config file
        "./node_modules/@nuxt/ui/dist/**/*.{js,vue,ts}" // Nuxt UI components
    ],
    theme: {
        extend: {
            colors: {
                tdgreen: '#D6FD18',
                tdpink: '#F21391',
                tdorange: '#FFB520',
                tdred: '#E02E2E',
            },
            fontFamily: {
                nerko: "Nerko One",
                gochi: "Gochi Hand",
                just: "Just Another Hand",
                patrick: "Patrick Hand",
            }
        }
    },
    plugins: [],
  }