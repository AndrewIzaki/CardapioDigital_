import './assets/base.css'
import router from '@/components/VueRouter.vue'
import { createApp } from 'vue'
import App from './App.vue'

createApp(App)
    .use(router)
    .mount('#app')
