import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  build: {
    transpile: ['vuetify'],
  },
  css: [
    'vuetify/styles',
    '~/assets/styles/style.css'
  ],
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
modules: [
  '@nuxt/eslint',
  '@nuxt/fonts',
  '@nuxt/icon',
  '@nuxt/image',
  '@nuxt/scripts',
  (_options, nuxt) => {
    nuxt.hooks.hook('vite:extendConfig', (config) => {
      // @ts-expect-error
      config.plugins.push(vuetify({ autoImport: true }))
    })
  }
  
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls
      },
    },
  },
  
})
