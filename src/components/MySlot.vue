<template>
  <div>
    <header><slot name="header" card="header"></slot></header>
    <main><slot name="main" card="main"></slot></main>
    <footer><slot name="footer" card="footer"></slot></footer>
    <footer><slot card="default"></slot></footer>
  </div>
</template>

<script setup></script>
<style scoped></style>
