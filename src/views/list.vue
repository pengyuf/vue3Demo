<template>
  <div>
    <VirList
      :list-data="items"
      :item-size="50"
      style="height: 500px; width: 300px; margin: 0 auto"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import VirList from "../components/virList.vue";

// 生成测试数据
const items = ref(
  Array.from({ length: 1000 }, (_, i) => ({
    id: i,
    content: `列表项 ${i + 1}`,
  }))
);
</script>
