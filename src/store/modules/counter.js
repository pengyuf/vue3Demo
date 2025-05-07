import { defineStore } from "pinia"

export const useCounter = defineStore('counter', {
    state: () => ({
        count: 0,
        add:10
    }),

    actions: {
        increatment() {
            this.count++
        }
    },

    getters: {
        doubleCount: (state) => state.count * 2,
        doublemCountPlus: () => this.doubleCount + 1
    },
    persist: true // 启用持久化
})