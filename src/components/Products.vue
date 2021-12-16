<template>
  <h1>Products</h1>
  <ul>
<li v-for="product of $store.state.products" :key = 'product.id'>
  <router-link :to="`/${product.id}`">{{product.title}} | {{product.price}}</router-link>
  <button @click="addToCart(product)">{{idProductInCart(product.id) ? 'remove' : 'add'}}</button>
</li>
  </ul>
</template>

<script>
export default {
  name: "Products",
  created() {
    this.$store.dispatch('getProducts')
  },
  methods: {
    addToCart(product){
      this.$store.dispatch('toggleCartItems', product)
    },
    idProductInCart(productId){
      return !!this.$store.state.cartItems.find(el => el.id === productId)
    }
  }
}
</script>

<style scoped>

</style>
