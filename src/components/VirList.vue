<template>
    <div 
      class="virtual-list-container" 
      ref="container" 
      @scroll="scrollEvent"
    >
      <div class="virtual-list-phantom" :style="{ height: listHeight + 'px' }"></div>
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
  import { ref, computed, onMounted } from 'vue';
  
  const props = defineProps({
    // 所有列表数据
    listData: {
      type: Array,
      default: () => []
    },
    // 每项高度
    itemSize: {
      type: Number,
      default: 200
    }
  });
  
  const container = ref(null);
  const screenHeight = ref(0);
  const startOffset = ref(0);
  const start = ref(0);
  const end = ref(null);
  
  // 列表总高度
  const listHeight = computed(() => {
    return props.listData.length * props.itemSize;
  });
  
  // 可显示的列表项数
  const visibleCount = computed(() => {
    return Math.ceil(screenHeight.value / props.itemSize);
  });
  
  // 偏移量对应的style
  const getTransform = computed(() => {
    return `translate3d(0,${startOffset.value}px,0)`;
  });
  
  // 获取真实显示列表数据
  const visibleData = computed(() => {
    return props.listData.slice(start.value, Math.min(end.value, props.listData.length));
  });
  
  const scrollEvent = () => {
    // 当前滚动位置
    let scrollTop = container.value.scrollTop;
    // 此时的开始索引
    start.value = Math.floor(scrollTop / props.itemSize);
    // 此时的结束索引
    end.value = start.value + visibleCount.value;
    // 此时的偏移量
    startOffset.value = scrollTop - (scrollTop % props.itemSize);
    // startOffset.value = scrollTop;

  };
  
  onMounted(() => {
    screenHeight.value = container.value.clientHeight;
    start.value = 0;
    end.value = start.value + visibleCount.value;
  });
  </script>
  
  <style>
  .virtual-list-container {
    height: 100%;
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