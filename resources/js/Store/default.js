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
            Api.changeSettings(state.post, state.component)
        },
        CHANGE_POST: (state, payload) => {
            state.post = payload
            Api.changeSettings(state.post, state.component)
        }
    },
    getters: {
        user: async function (state) {
            const user = await Api.getUserInfo()

            console.log(user.resource)

            return user.resource
        }
    }
})