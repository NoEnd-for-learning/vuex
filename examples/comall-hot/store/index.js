import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'

Vue.use(Vuex)

const state = {
    count: Math.random().toFixed(2),
    history: []
}

const store = new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})

console.log(module.hot, module);

// 实现无刷新更新
if (module.hot) {
    module.hot.accept([
        './getters',
        './actions',
        './mutations'
    ], () => {
        store.hotUpdate({
            getters: require('./getters'),
            actions: require('./actions'),
            mutations: require('./mutations')
        })
    })
}

export default store