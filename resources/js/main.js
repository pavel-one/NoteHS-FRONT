import Vue from "vue";
import App from "./App.vue"
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'
import Api from "./plugins/api.js"
import { store } from "./Store/default.js"

import SpeedDialPage from "./Pages/SpeedDialPage";
import NotePage from "./Pages/NotePage";

Vue.component('SpeedDialPage', SpeedDialPage)
Vue.component('NotePage', NotePage)

Vue.use(Vuesax)
Vue.use(Api)

let app = new Vue({
    el: '#app',
    store: store,
    render: h => h(App)
}).$mount("#app");