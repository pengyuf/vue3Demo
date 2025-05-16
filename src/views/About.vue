<template>
    <div>about</div>
</template>

<script setup>
import { onBeforeRouteLeave, onBeforeRouteUpdate, useRoute } from 'vue-router';

const route = useRoute();

console.log(route.params);

onBeforeRouteLeave((to, from) => {
    // 在离开路由前执行
    console.log(to, from);
})

onBeforeRouteUpdate((to, from) => {
    // 在路由参数更新时执行
    console.log(to, from);
})
</script>