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

// commit实质上是是context 中的一个方法，写在action里面
// 对比commit，dispatch 发现：很类似
// commit:ƒ boundCommit(type, payload, options)
// dispatch:ƒ boundDispatch(type, payload)
// Actions 支持同样的载荷方式和对象方式进行分发：

// 以载荷形式分发
// store.dispatch('incrementAsync', {
//     amount: 10
// })
//
// 以对象形式分发
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
// 实质上也是action的一种，用法也同action
// 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation, 非常类似于事件
// 实现过程：
// 1.由actions 中的commit(types) 触发相应的types
// 2.每个 mutation 都有一个字符串的 事件类型 (type) -- 由actions触发决定
// 和 一个 回调函数 (handler) -- 入参为state, 这时改变store 中的状态
const mutations = {
    increment(state) {
        state.count++;// 变更状态(改变了count), 在组件中重新渲染
        console.log(this, state.count)
    },
    decrement(state) {
        state.count--
    }
}

// [为了渲染另外一种数据]
// 有时候我们需要从 store 中的 state 中派生出一些状态，
// 例如对列表进行过滤并计数
const getters = {
    evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd'
}

export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters
})