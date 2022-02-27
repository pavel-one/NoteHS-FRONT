import Vue from "vue";
import App from "./App.vue"
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'
import Api from "./plugins/api.js";

Vue.use(Vuesax)

Vue.use(Api)

let app = new Vue({
    el: '#app',
    render: h => h(App)
}).$mount("#app");