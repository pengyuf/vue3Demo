<template>
  <div>接收Eventbus</div>
</template>

<script lang="ts" setup>
import {
  ref,
  reactive,
  toRefs,
  onMounted,
  onBeforeMount,
  getCurrentInstance,
  computed,
} from "vue";
import EventBus from "../../EventBus";

onMounted(() => {
  EventBus.on("custom-event", handleEventBus);
});

onBeforeMount(() => {
  EventBus.off("custom-event", handleEventBus);
});

const handleEventBus = (data) => {
  console.log("数据", data);
};
</script>
<style scoped lang="scss"></style>
