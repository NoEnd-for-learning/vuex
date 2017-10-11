import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import cart from './modules/cart'
import products from './modules/products'
import createLogger from '../../../src/plugins/logger'
// logger 中间件方便调试和观察数据变化，在action 调用后,
// logger 在控制台输出的内容，记录了mutation 的type 和调用时间，以及state 的变化

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    actions,
    getters,
    modules: {
        cart,
        products
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
})