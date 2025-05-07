<template>
    <input v-model="content" @keyup.enter="addTodo" />
    <ul>
        <li v-for="item in todoStore.todos" :key="item.id">
            <input type="checkbox" v-model="item.completed" />
            {{ item.content }}
            <button @click="todoStore.delTodo(item.id)">删除</button>
        </li>
    </ul>
    <p>已完成: {{ todoStore.completedTodos.length }}</p>
    <p>未完成: {{ todoStore.activeTodos.length }}</p>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useTodoStore } from "../store/modules/todo";

const todoStore = useTodoStore()

const content = ref('')

const addTodo = () => {
    todoStore.addTodo(content.value)
    content.value = ''
}
</script>