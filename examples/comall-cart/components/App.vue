<template>
    <div id="app">
        <h1>CoMall Cart</h1>
        <hr>
        <h2>产品</h2>
        <product-list></product-list>
        <hr>
        <cart></cart>
    </div>
</template>

<script>
    import ProductList from './ProductList.vue'
    import Cart from './Cart.vue'

    export default {
        components: { ProductList, Cart }
    }
</script>