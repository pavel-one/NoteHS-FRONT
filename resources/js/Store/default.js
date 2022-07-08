import Vue from "vue";
import Vuex from 'vuex'
import Api from "@/plugins/root/rootApi";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        title: 'Быстрый доступ',
        component: '',
        post: 0
    },
    mutations: {
        CHANGE_COMPONENT: (state, payload) => {
            state.component = payload
            state.title = payload
        },
        CHANGE_POST: (state, payload) => {
            state.post = payload
        }
    },
    getters: {
        user: async function (state) {
            console.log(this)
            const user = await Api.getUserInfo()

            return user.resource
        }
    }
})