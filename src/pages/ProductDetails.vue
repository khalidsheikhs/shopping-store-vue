<template>
  <div>
    <div class="grid md:grid-cols-9 md:grid-flow-col gap-10">
      <Cart />
      <div class="md:col-span-7 px-10 md:pr-0">
        <div class="bg-white border grid grid-cols-3 my-10 overflow-x-hidden product">
          <figure class="p-10 row-span-2 flex items-center justify-center">
            <img :src="product.image" :alt="product.title" Name="h-96" />
          </figure>
          <div class="col-span-2 p-10">
            <h3 class="text-3xl mb-5">{{product.title}}</h3>
            <p class="mb-5">{{product.description}}</p>
            <p class="flex items-center justify-between">
              <span class="text-4xl text-gray-600">Price: <span class="text-pink-600">{{formatCurrency(product.price)}}</span></span>
              <button class="px-5 py-3 rounded-xl text-sm font-medium text-white bg-pink-600 hover:bg-pink-800 active:bg-grey-900 focus:outline-none border-4 border-white focus:border-purple-200 transition-all" v-on:click="addToCart(product)">Add to Cart</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Cart from '../components/Cart'
import * as util from '../services/util'

export default {
  name: 'ProductDetails',
  components: {
      Cart
  },
  methods: {
    formatCurrency: (amount) => {
      return util.formatCurrency(amount)
    },
    addToCart(item) {
      this.$store.dispatch('addItem', item)
    }
  },
  computed: {
    product () {
      return this.$store.state.selectedProduct
    }
  },
  mounted() {
    this.$store.dispatch('selectProduct', this.$route.params.productId)
  },
  beforeDestroy() {
    this.$store.dispatch('selectProduct', -1)
  }
}
</script>

<style scoped>
</style>