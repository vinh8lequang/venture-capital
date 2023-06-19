// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css",
  ],
  build: {
    transpile: ["vuetify"],
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/supabase"],
  app: {
    head: {
      title: "Hypermedia",
      meta: [
        {
          name: "description",
          content: "Project for Hypermedia course at Politecnico di Milano",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css",
        },
      ],
    },
  },
  routeRules: {
    "/": { prerender: true },
    "/categories/**": { isr: true },
    "/projects/**": { isr: true },
    "/team": { isr: true },
    "/about/**": { prerender: true },
  },
});
