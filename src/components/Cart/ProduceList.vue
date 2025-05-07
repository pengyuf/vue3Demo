<template>
  <div>
    <h2>商品列表</h2>
    <ul>
      <li v-for="product in cartStore.products" :key="product.id">
        {{ product.name }} - ￥{{ product.price }}
        <button @click="cartStore.addToCart(product)">加入购物车</button>
      </li>
    </ul>
    <Cart/>
  </div>
</template>

<script lang="ts" setup>
import Cart from "./Cart.vue";
import { useCartStore } from "../../store/modules/cartStore";

const cartStore = useCartStore();
</script>
<style scoped lang="scss"></style>
