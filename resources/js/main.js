import Vue from "vue";
import App from "./App.vue"
import Vuesax from 'vuesax'
import Api from "@/plugins/api.js"
import { store } from "@store/default.js"
import Editor from 'vue-editor-js/src'

import SpeedDialPage from "@pages/SpeedDialPage";
import NotePage from "@pages/NotePage";

import 'vuesax/dist/vuesax.min.css'

Vue.component('SpeedDialPage', SpeedDialPage)
Vue.component('NotePage', NotePage)

Vue.use(Vuesax)
Vue.use(Api)
Vue.use(Editor)

let app = new Vue({
    el: '#app',
    store: store,
    render: h => h(App)
}).$mount("#app");