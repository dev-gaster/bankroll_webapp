import {
  
  Dropdown,
  Tooltip,
  Menu
} from 'floating-vue'
import 'floating-vue/dist/style.css'

export default defineNuxtPlugin((nuxtApp) => {


  nuxtApp.vueApp.component('VDropDown', Dropdown)
  nuxtApp.vueApp.component('VTooltip', Tooltip)
  nuxtApp.vueApp.component('VMenu', Menu)
})
