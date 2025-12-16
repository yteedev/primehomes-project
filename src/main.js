import { createApp } from 'vue'
import SmartHomesRw from './SmartHomesRw.vue'
import router from './router'
import './assets/main.css'

createApp(SmartHomesRw).use(router).mount('#app')
