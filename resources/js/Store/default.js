import Vue from "vue";
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        title: 'Быстрый доступ',
        component: 'SpeedDialPage'
    },
    mutations: {
        CHANGE_COMPONENT: (state, payload) => {
            state.component = payload
        }
    }
})