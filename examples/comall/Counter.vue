<template>
    <div id="app">
        点击: {{ $store.state.count }} times, count is {{ evenOrOdd }}.
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementIfOdd">Increment if odd</button>
        <button @click="incrementAsync">Increment async</button>
    </div>
</template>

<script>
    // 在这里使用mapGetters, mapActions 辅助函数的作用：
    // 将组件的 methods 映射为 store.dispatch 调用
    // （需要先在根节点注入 store）

    import { mapGetters, mapActions } from 'vuex'

    export default {
        computed: mapGetters([
            'evenOrOdd'
        ]),
        methods: mapActions([
            'increment',//将 `this.increment()` 映射为 `this.$store.dispatch('increment')`
            'decrement',
            'incrementIfOdd',
            'incrementAsync'
        ])
    }
</script>