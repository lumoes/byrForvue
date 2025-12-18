import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')
import { MotionPlugin } from '@vueuse/motion'
App.use(MotionPlugin)
