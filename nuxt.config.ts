// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  modules: ['@nuxt/ui', '@nuxt/image'],
  
  css: ['./app/assets/css/main.css'],
  
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  
  ui: {
    fonts: false
  },

  // app était mal placé (manquait une virgule après ui)
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Gravitas+One&display=swap'
        },
         {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Cookie&display=swap'
        },
         {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Nova+Square&display=swap'
        }
      ]
    }
  },
  
  
});