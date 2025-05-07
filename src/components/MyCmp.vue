<template>
  <div>
    <div>对象Prop默认值:{{ obj.name }}</div>
    <div>数组Prop默认值:{{ arr.join() }}</div>
    <button @click="clickFn">默认方法调用</button>
    <button @click="toSubmit">submit</button>
  </div>
</template>

<script setup>
const props = defineProps({
  propA: {
    type: String,
    default: "best",
  },
  propB: {
    type: Number,
    required: true,
  },
  propC: [String, Number],
  obj: {
    type: Object,
    default: () => ({
      name: "best",
    }),
  },
  arr: {
    type: Array,
    default: () => [1, 2, 3],
  },
  fun: {
    type: Function,
    default: () => {
      alert("这是默认函数被调用了");
    },
  },
});

const emits = defineEmits(["submit"]);

const toSubmit = ()=>{
    emits('submit',{name:'best'})
}

const clickFn = () => {
  props.fun();
};
</script>
<style scoped></style>
