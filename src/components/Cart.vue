<template>
    <div>
        <h2>购物车</h2>
        <ul>
            <li v-for="item in cartStore.cartItems" :key="item.product.id">
                {{ item.product.name }} - ￥{{ item.product.price }} x {{ item.count }}
                <button @click="cartStore.addCount(item.product.id)">+</button>
                <button @click="cartStore.delCount(item.product.id)">-</button>
                <button @click="cartStore.removeFromCart(item.product.id)">删除</button>
            </li>
        </ul>
        <p>总价: ￥{{ cartStore.totalPrice }}</p>
        <p>商品数量: {{ cartStore.totalCount }}</p>
    </div>
</template>

<script lang="ts" setup>
import { useCartStore } from "../store/modules/cartStore";

const cartStore = useCartStore();
</script>