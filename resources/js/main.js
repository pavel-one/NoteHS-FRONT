import { createApp } from "vue";
import App from "./App.vue"
import Ant from 'ant-design-vue'
import Api from "./plugins/api.js";

import 'ant-design-vue/dist/antd.css'

const app = createApp(App)
    .use(Ant)
app.config.globalProperties.$api = Api

app.mount('#app')