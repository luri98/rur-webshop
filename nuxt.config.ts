// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },

  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE_URL
    }
  },

  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  modules: ['@formkit/auto-animate', 'nuxt-auth-sanctum'],
  sanctum: {
    appendPlugin: true,
    baseUrl: process.env.API_BASE_URL,
    mode: 'token',
    endpoints: {
      login: `/login`,
      logout: `/logout`,
      user: `/user`
    },
    redirect: {
      onLogin: '/',
      onLogout: '/prijava',
      onAuthOnly: '/prijava',
      keepRequestedRoute: true
    }
  },

  routeRules: {
    '/admin/**': { ssr: false }
  }
})