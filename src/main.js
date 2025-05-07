import { createApp } from 'vue'
import pinia from './store'
import App from './App.vue'
import GlobalCmp from './components/GlobalCmp.vue'

const app = createApp(App)

app.use(pinia)

// 全局注册组件
app.component('GlobalCmp', GlobalCmp)

app.mount('#app')

