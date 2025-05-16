<template>
  <div>
    <!-- <GlobalCmp /> -->
    <!-- <MyCmp @submit="toSubmit" /> -->
    <!-- <MyAttr class="button" @click="clickFather" /> -->
    <!-- <Child /> -->
    <!-- <MySlot>
        <template v-slot:header="headerProps">{{ headerProps.card }}</template>
<template #main="mainProps">{{ mainProps.card }}</template>
<template #footer="{ card }">{{ card }}</template>
<template #default="{card}">{{ card }}</template>
</MySlot> -->
    <!-- <MyModel v-model:title="curTitle" v-model:name="curName" /> -->
    <!-- <div>{{ counterStore.count }}</div> -->
    <div>{{ count }}</div>
    <button @click="counterStore.increatment">+</button>
    <button @click="counterStore.$reset()">重置</button>
    <div>
      <h3>测试toRefs</h3>
      <div>{{ age_01 }}</div>
      <div>{{ school_01 }}</div>
      <button @click="editAge">修改age</button>
      <button @click="editSchool">修改school</button>
    </div>
    <div>
      <h1>todo</h1>
      <TodoList />
    </div>
    <div>
      <ProduceList />
    </div>
    <div>
      <h1>事件总线</h1>
      <PushCmp />
      <SubCmp />
    </div>
    <div>
      <h1>路由</h1>
      <router-link to="/about">about</router-link>
      <button @click="toAbout">about</button>
      <button @click="toList">虚拟列表</button>
    </div>
  </div>
</template>

<script setup>
import { provide, ref, toRefs, watch, toRef, reactive } from "vue";
import { onBeforeRouteLeave, onBeforeRouteUpdate, useRouter } from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";
import MyCmp from "../components/MyCmp.vue";
import MyAttr from "../components/MyAttr.vue";
import Child from "../components/Child.vue";
import MySlot from "../components/MySlot.vue";
import MyModel from "../components/MyModel.vue";
import TodoList from "../components/TodoList.vue";
import ProduceList from "../components/Cart/ProduceList.vue";
import PushCmp from "../components/EventBus/PushCmp.vue";
import SubCmp from "../components/EventBus/subCmp.vue";
import { useCounter, } from "../store/modules/counter";
import { storeToRefs } from "pinia";
import { useToRefs } from "../hooks/testToRefs";

const router = useRouter();

const counterStore = useCounter();
const { count } = storeToRefs(counterStore);

counterStore.$subscribe((mutation, state) => {
  console.log("mutation", mutation);
  console.log("state", state);
});

const toSubmit = (e) => {
  console.log(e);
};
const clickFather = () => {
  console.log("父级点击");
};

const age = ref(18);

const updateAge = () => {
  age.value++;
};

provide("age", {
  age,
  updateAge,
});

const curTitle = ref("用户名");
const curName = ref("姓名");

const { age: age_01, school: school_01, editAge, editSchool } = useToRefs();

const toAbout = () => {
  router.push("/about/18/zhangsan",);
}
const toList = () => {
  router.push("/list");
}
</script>
<style scoped></style>