<template>
  <div>根1</div>
  <div>根2</div>
  <div v-bind="$attrs" @click="clickChild">根3</div>
  <button @click="printAttr">JavaScript 中访问透传 Attributes</button>
</template>

<script setup>
import { useAttrs } from "vue";

const clickChild = () => {
  console.log("子组件点击");
};

const attr = useAttrs();

const printAttr = () => {
    console.log(attr)
};
</script>
<style scoped></style>
