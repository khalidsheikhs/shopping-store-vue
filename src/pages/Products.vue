<template>
  <div class="grid md:grid-cols-9 md:grid-flow-col gap-10">
    <Cart />
    <div class="md:col-span-7 px-10 md:pr-0">
      <ProductFilter :count="products.length || 0" @clicked="sortProducts" />
      <div class="products mb-10">
        <ul v-if="products.length" class="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <Product v-for="(product, index) in products" :key="index" :product="product" />
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Product from '../components/Product'
import Cart from '../components/Cart'
import ProductFilter from '../components/Filter'
/*import { mapGetters } from 'vuex'*/

export default {
  name: 'Products',
  components: {
    Product,
    Cart,
    ProductFilter
  },
  methods: {
    addToCart(item) {
      this.$store.dispatch('addItem', item)
    },
    sortProducts(value) {
      this.$store.dispatch('sortProducts', value)
    }
  },
  computed: {
    /*...mapGetters([
      'getProducts'
    ])*/
    products () {
      return this.$store.state.products
    }
  },
  mounted() {
    if (!this.$store.state.products.length) this.$store.dispatch('loadProducts')
  }
}
</script>

<style scoped>
</style>