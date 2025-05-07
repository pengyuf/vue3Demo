import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
    state: () => ({
        products: [
            { id: 1, name: '商品1', price: 10 },
            { id: 2, name: '商品2', price: 20 },
            { id: 3, name: '商品3', price: 30 },
        ],
        cartItems: []
    }),
    getters: {
        totalPrice() {
            return this.cartItems.reduce((total, item) => total + (item.product.price * item.count), 0)
        },
        totalCount() {
            return this.cartItems.reduce((total, item) => total + item.count, 0)
        }
    },
    actions: {
        addToCart(product) {
            const existItem = this.cartItems.find(item => item.product.id === product.id)
            if (existItem) {
                existItem.count++
            } else {
                this.cartItems.push({ product, count: 1 })
            }
        },
        removeFromCart(productId) {
            this.cartItems = this.cartItems.filter(item => item.product.id !== productId)
        },
        addCount(productId) {
            const item = this.cartItems.find(item => item.product.id === productId)
            item.count++
        },
        delCount(productId) {
            const item = this.cartItems.find(item => item.product.id === productId)
            if (item.count > 0) {
                item.count--
            }
        }
    }
})