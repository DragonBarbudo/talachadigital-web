// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  colorMode: {
    preference: 'light'
  },
  umami: {
    id: '06a80438-393f-48ae-ac78-c787db9d2eab',
    host: 'https://umami-production-0033e.up.railway.app/script.js',
    autoTrack: true,
  },
  googleFonts: {
    families: {
      'Nerko+One': true,
      'Gochi Hand': true,
      'Just Another Hand': true,
      'Patrick Hand': true
    }
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/google-fonts', //'@nuxtjs/tailwindcss',
  '@vueuse/nuxt', '@nuxtjs/sitemap', 'nuxt-umami', '@nuxt/icon', '@nuxt/image', 'nuxt-lazytube', '@nuxt/ui', 'nuxt-clarity-analytics'],
  ui: {
    primary: '#ffdd00'
  }
})