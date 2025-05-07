<template>
  <div>
    <input v-model="title" />
    <input v-model="name" />
  </div>
</template>

<script setup>
const title = defineModel("title");
const name = defineModel("name");
</script>
<style scoped></style>
