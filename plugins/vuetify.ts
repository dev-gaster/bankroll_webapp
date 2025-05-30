// import this after install `@mdi/font` package
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import colors from 'vuetify/lib/util/colors.js'


import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
      themes: {
        light: {
          dark: false,
          colors: {
            primary: '#5936BB',
            secondary: '#214EBC',
            background: '#fafcfc',
          }
        }
      }
    }
  })
  app.vueApp.use(vuetify)
})
