import { createApp } from "vue";
import App from "./App.vue";
// 引入
import HlymUI from "../packages";
const app = createApp(App);
// 注册
app.use(HlymUI).mount("#app");
