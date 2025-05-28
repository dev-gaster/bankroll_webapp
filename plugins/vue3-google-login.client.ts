import { defineNuxtPlugin } from '#app'
import GoogleLoginPlugin from 'vue3-google-login'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(GoogleLoginPlugin, {
    clientId: '838971008085-jb4khkfqegsvfq5r0st02hr1gake4smj.apps.googleusercontent.com'
  })
})
