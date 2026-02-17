// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  ssr: true,
  css: ['@/assets/styles/main.scss'],
  app: {
    head: {
      title: 'Тестовое задание',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
    },
  },
  modules: [
    '@nuxt/image',
  ],
  image: {
    format: ['webp'],
    domains: ['test-task-api.tapir.ws'],
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use '@/assets/styles/mixins' as *;
          `,
        },
      },
    },
  },
})
