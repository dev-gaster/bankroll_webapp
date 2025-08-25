import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({

  css: [
    '~/assets/styles/style.css'
  ],
  compatibilityDate: '2025-05-15',
  devtools: { enabled: process.env.NODE_ENV === 'development' },
  build: {
    transpile: ['vuetify'],
  },
    scripts: {
      registry: {
        googleTagManager: {
          id: 'G-BB2ZNF9ENN',
        }
      }
    },
  app: {
    head: {
      title: "Bankroll: 1# Digital platform that enables you to support (a person, organization, or project) financially.",
      titleTemplate: "%s | Bankroll.cash",
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Bankroll is a digital platform that enables you to support (a person, organization, or project) financially.' },
        { name: 'keywords', content: 'Bankroll, crowdfunding, fundraising, support, donations, financial support, campaigns, projects, organizations' },
        { name: 'author', content: 'Bankroll Technologies' },
        { name: 'theme-color', content: '#ffffff' },
        { name: 'og:title', content: 'Bankroll: 1# Digital platform that enables you to support (a person, organization, or project) financially.' },
        { name: 'og:description', content: 'Bankroll is a digital platform that enables you to support (a person, organization, or project) financially.' },
        { name: 'og:image', content: 'https://gasobu-bankroll-bucket.s3.eu-north-1.amazonaws.com/app-images/og-image.png' },
        { name: 'og:url', content: 'https://bankroll.cash' },
        { name: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Bankroll: 1# Digital platform that enables you to support (a person, organization, or project) financially.' },
        { name: 'twitter:description', content: 'Bankroll is a digital platform that enables you to support (a person, organization, or project) financially.' },
        { name: 'twitter:image', content: 'https://gasobu-bankroll-bucket.s3.eu-north-1.amazonaws.com/app-images/og-image.png' },
      ],
    }
  },
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    // '@nuxtjs/apollo',
    '@pinia/nuxt',
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
  // apollo: {
  //   clients: {
  //     default: {
  //       httpEndpoint: 'http://127.0.0.1:8000',
  //       tokenName: "token",
  //       tokenStorage: 'cookie'
  //     }
  //   },
  // },
  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL,
      // authTokenName: process.env.AUTH_TOKEN_NAME,
      // refreshTokenName: process.env.REFRESH_TOKEN_NAME,
    },
  },

  vite: {
    vue: {
      template: {
        transformAssetUrls
      },
    },
  },
})
