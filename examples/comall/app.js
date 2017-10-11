import 'babel-polyfill'
// 它会模拟es6环境，并且倾向在应用中使用而不是当作一个库或者工具。
// 在使用babel-node时会自动加载
import Vue from 'vue'
import Counter from './Counter.vue'
import store from './store'

new Vue({
    el: '#app',
    store,
    render: h => h(Counter)
})