<template>
  <header>
    <div><h1>Welcome to our show</h1>
      <router-link class="link" to="/">Products</router-link>
    </div>

    <div :title="cartPrice">
      Cart items: {{ cart.length }}
    </div>

  </header>
</template>

<script>
export default {
  name: "Header",
  computed: {
    cart() {
      return this.$store.state.cartItems
    },
    cartPrice() {
      return '$' + this.cart.reduce((acc, el) => (acc += el.price), 0)
    }
  }
}
</script>

<style scoped>
header {
  background: #54a4b9;
  color: white;
  font-size: 16px;
  display: flex;
  align-items: center;
  padding: 16px 20px;
}

.link {
  margin-left: 30px;
  color: #f7ceff;
  text-decoration: underline;
}

</style>
