import './assets/main.css'

import { createApp } from 'vue'
import router from './router'

import App from './App.vue'

const app = createApp(App)

app.config.globalProperties.$filters = {
    upperFirst(str) {
        return str ? str.charAt(0).toUpperCase() + str.slice(1) : ''
    }
}

app.use(router)
app.mount('#app')
