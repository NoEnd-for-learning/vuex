import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 初始化值
const state = {
    count: 8084
}

// 定义actions 可以包含任意的异步操作
// Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象，解构赋值，即{ commit }
// 因此你可以调用 context.commit 提交一个 mutation，或者通过 context.state 和 context.getters 来获取 state 和 getters

// 在store 中注册，用dispatch 派发
// Actions 支持同样的载荷方式和对象方式进行分发：
// 1.以载荷形式分发
// store.dispatch('incrementAsync', {
//     amount: 10
// })
//
// 2.以对象形式分发
// store.dispatch({
//     type: 'incrementAsync',
//     amount: 10
// })

const actions = {
    increment: ({ commit }) => commit('increment'),
    decrement: ({ commit }) => commit('decrement'),
    incrementIfOdd ({ commit, state }) {
        // 奇数加1
        if ((state.count + 1) % 2 === 0) {
            commit('increment')
        }
    },
    // 进行异步操作，使用promises
    incrementAsync ({ commit }) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                commit('increment')
                resolve()
            },500)
        })
    }
}

// mutations 必须同步操作(限制)
// 
const mutations = {
    increment(state) {
        state.count++;
        console.log(this, state.count)
    },
    decrement(state) {
        state.count--
    }
}

const getters = {
    evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd'
}

export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters
})