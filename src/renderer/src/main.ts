// 导入 vue 和 createApp 方法
import App from './App.vue'
import { createApp } from 'vue'
import ArcoVue from '@arco-design/web-vue'
import '@arco-design/web-vue/dist/arco.css'

// 创建 vue 实例
const app = createApp(App)
app.use(ArcoVue)
app.mount('#app')
