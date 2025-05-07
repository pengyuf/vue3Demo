import { defineStore } from "pinia";

export const useTodoStore = defineStore('todo', {
    state: () => ({
        todos: []
    }),
    getters: {
        completedTodos() {
            return this.todos.filter(todo => todo.completed)
        },
        activeTodos() {
            return this.todos.filter(todo => !todo.completed)
        }
    },
    actions: {
        addTodo(content) {
            this.todos.push({ id: new Date(), content, completed: false })
        },
        toggleTodo(id) {
            const todo = this.todos.find(todo => todo.id === id);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        delTodo(id) {
            this.todos = this.todos.filter((todo) => todo.id !== id)
        }
    }
})