// 导入 vue 和 createApp 方法
import App from "./App.vue";
import { createApp } from "vue";
// 导入 element-plus
import ElementPlus from "element-plus";
// 导入 element-plus 样式
import "element-plus/dist/index.css";

// 创建 vue 实例
const app = createApp(App)

// 使用router\vuex\element-plus并挂载
app.use(ElementPlus).mount("#app")
