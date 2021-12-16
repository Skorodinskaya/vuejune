import {createApp} from 'vue'
import App from './App.vue'
import {createStore} from 'vuex'
import {router} from "@/routers";

const store = createStore({
    state() {
        return {
            products: [],
            selectedProduct: null,
            cartItems: []
        }
    },
    mutations: {
        setProducts: (state, payload) => state.products = payload,
        setSelectedProduct: (state, payload) => state.selectedProduct = payload,
        clearSelectedProduct: (state) => state.selectedProduct = null,
        addToCart: (state, payload) => state.cartItems.push(payload),
        removeFromCart:(state, payload) => (state.cartItems = state.cartItems.filter(el => el.id !== payload.id))
    },
    actions: {
        async getProducts({commit}) {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();

            commit('setProducts', data)
        },

        async getSelectedProduct({commit}, productId) {
            const response = await fetch(`https://fakestoreapi.com/products/${productId}`)
            const data = await response.json()
            commit('setSelectedProduct', data)
        },

        toggleCartItems({state, commit}, product){
            const mutation = state.cartItems.find(item => item.id === product.id) ? 'removeFromCart' : 'addToCart';
            commit(mutation, product)
        }
    }
})
createApp(App)
    .use(router)
    .use(store)
    .mount('#app')
