import Vue from "vue";
import App from "./App.vue"
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'

Vue.use(Vuesax)

let app = new Vue({
    el: '#app',
    render: h => h(App)
}).$mount("#app");