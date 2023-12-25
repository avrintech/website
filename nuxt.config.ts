// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@tailwindcss/forms', '@tailwindcss/typography'],
  head: {
    script: [
      { 
        src: '/vendor/preline/dist/preline.js', 
        body: true, 
        defer: true 
      }
    ]
  }
})
