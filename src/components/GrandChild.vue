<template>
  <div>孙子组件</div>
  <div>age:{{ ageData.age }}</div>
  <button @click="addAge">更新age</button>
</template>

<script setup>
import { inject } from "vue";

const ageData = inject("age");

const addAge = () => {
  ageData.updateAge();
};
</script>
<style scoped></style>
