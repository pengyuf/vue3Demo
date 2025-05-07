import {createPinia} from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'


const pinia = createPinia()
// piniaPluginPersistedstate 是一个 Pinia 插件，它的作用是让 Pinia store 中的状态持久化。
// 当页面刷新或者关闭后重新打开，store 中的状态不会丢失，会从本地存储（如 localStorage 或 sessionStorage）中恢复。
pinia.use(piniaPluginPersistedstate)

export default pinia