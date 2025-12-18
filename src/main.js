import { createApp } from 'vue'
import { createPinia } from 'pinia'
import SmartHomesRw from './SmartHomesRw.vue'
import router from './router'
import './assets/main.css'

const pinia = createPinia()

createApp(SmartHomesRw).use(router).use(pinia).mount('#app')
