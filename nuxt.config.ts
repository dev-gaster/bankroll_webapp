import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
  build: {
    transpile: ['vuetify'],
  },
  css: [
    '~/assets/styles/style.css'
  ],
  compatibilityDate: '2025-05-15',
  devtools: { enabled: process.env.NODE_ENV=='development' },

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    ['nuxt-vue3-google-signin', {
      clientId: '838971008085-jb4khkfqegsvfq5r0st02hr1gake4smj.apps.googleusercontent.com',
    }],
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error: vite config type does not include plugins property, but it exists at runtime
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
