import { createVuetify } from 'vuetify'
import { VFileUpload } from 'vuetify/labs/VFileUpload'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    components: {
      VFileUpload, 
    },
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
