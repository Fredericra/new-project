import './assets/base.css'
import 'element-plus/dist/index.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import AOS from 'aos';


const app = createApp(App)

app.use(router)
app.use(ElementPlus)
app.use(AOS.init())

app.mount('#app')
