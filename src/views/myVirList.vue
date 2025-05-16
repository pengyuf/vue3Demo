<template>
  <div ref="container" class="virtual-list-container" @scroll="scrollEvent">
    <div
      class="virtual-list-phantom"
      :style="{ height: listHeight + 'px' }"
    ></div>
    <div class="virtual-list" :style="{ transform: getTransform }">
      <div
        v-for="item in visibleData"
        :key="item.id"
        class="virtual-list-item"
        :style="{ height: itemSize + 'px' }"
      >
        {{ item.content }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";

const items = ref(
  Array.from({ length: 1000 }, (_, i) => ({
    id: i,
    content: `列表项 ${i + 1}`,
  }))
);

const container = ref(null);
const itemSize = ref(50);
const screenHeight = ref(0);
const startIndex = ref(0);
const endIndex = ref(0);
const startOffset = ref(0);

// 可视区域可展示的数量
const visibleCount = computed(() => {
  return Math.ceil(screenHeight.value / itemSize.value);
});

// 当前展示的列表项
const visibleData = computed(() => {
  const list = items.value.slice(
    startIndex.value,
    Math.min(endIndex.value, items.value.length)
  );
  return list;
});

// 总高度
const listHeight = computed(() => {
  return items.value.length * itemSize.value;
});

// 偏移量
const getTransform = computed(() => {
  return `translate3d(0,${startOffset.value}px,0)`;
});

const scrollEvent = () => {
  const scrollTop = container.value.scrollTop;

  startIndex.value = Math.floor(scrollTop / itemSize.value);
  endIndex.value = startIndex.value + visibleCount.value;
  startOffset.value = scrollTop - (scrollTop % itemSize.value);
};

onMounted(() => {
  screenHeight.value = container.value.clientHeight;
  startIndex.value = 0;
  endIndex.value = startIndex.value + visibleCount.value;
});
</script>

<style>
.virtual-list-container {
  margin: 0 auto;
  height: 500px;
  overflow: auto;
  position: relative;
  -webkit-overflow-scrolling: touch;
}

.virtual-list-phantom {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  z-index: -1;
}

.virtual-list {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
}

.virtual-list-item {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border-bottom: 1px solid #eee;
}
</style>
