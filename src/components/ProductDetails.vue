<template>
  <h1>Product details</h1>
  <ul v-if="selectedProduct">
    <li>{{selectedProduct.title}}</li>
    <li>{{selectedProduct.price}}</li>
    <li>{{selectedProduct.description}}</li>
    <li><img :src="selectedProduct.image" alt="image"></li>
  </ul>
</template>

<script>
export default {
  name: "ProductDetails",
  created(){
    const {id} = this.$route.params;
    this.$store.commit('clearSelectedProduct')
    this.$store.dispatch('getSelectedProduct', id)
  },
  computed: {
    selectedProduct(){
      return this.$store.state.selectedProduct
    }
  }

}
</script>

<style>
img {
  max-width: 200px;
}

</style>
