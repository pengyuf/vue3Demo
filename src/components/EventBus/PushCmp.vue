<template>
  <div>
    <button @click="send">发送</button>
  </div>
</template>

<script lang="ts" setup>
import {
  ref,
  reactive,
  toRefs,
  onMounted,
  getCurrentInstance,
  computed,
} from "vue";
import EventBus from "../../EventBus";

const send = () => {
  EventBus.emit("custom-event", { message: "Hello from ComponentA!" });
};
</script>
<style scoped lang="scss"></style>
