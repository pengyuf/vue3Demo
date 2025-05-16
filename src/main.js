import { createApp } from 'vue'
import pinia from './store'
import router from './router'
import App from './App.vue'
import GlobalCmp from './components/GlobalCmp.vue'

const app = createApp(App)

app.use(pinia)
app.use(router)

// 全局注册组件
app.component('GlobalCmp', GlobalCmp)

app.mount('#app')

