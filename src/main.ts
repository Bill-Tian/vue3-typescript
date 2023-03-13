// 引入状态管理
import { setupStore } from '@/store'

// 引入路由
import router from "./router";

import { createApp } from "vue";

import App from "./App.vue";

// 引入 ElementPlus 组件
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

setupStore(app)
app.use(ElementPlus);
app.use(router);

app.mount("#app");
