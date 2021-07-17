<template>
  <li class="bg-white border overflow-x-hidden rounded-xl hover:shadow-lg divide-y grid grid-rows-3">
    <figure class="p-10 row-span-2 flex items-center justify-center">
      <router-link :to="{ name: 'product', params: { productId: product.id }}">
        <img :src="product.image" :alt="product.title" class="h-96" />
      </router-link>
    </figure>
    <div class="grid grid-rows-2 p-10">
      <h3><router-link :to="{ name: 'product', params: { productId: product.id }}" class="hover:text-pink-600">{{product.title}}</router-link></h3>
      <p class="flex items-center justify-between">
        <span class="text-4xl text-gray-600">{{formatCurrency(product.price)}}</span>
        <button class="px-5 py-3 rounded-xl text-sm font-medium text-white bg-pink-600 hover:bg-pink-800 active:bg-grey-900 focus:outline-none border-4 border-white focus:border-purple-200 transition-all" v-on:click="addToCart(product)">Add to Cart</button>
      </p>
    </div>
  </li>
</template>

<script>
import * as util from '../services/util'

export default {
  name: 'Product',
  props: [
    'product'
  ],
  methods: {
    formatCurrency: (amount) => {
      return util.formatCurrency(amount)
    },
    addToCart(item) {
      this.$store.dispatch('addItem', item)
    }
  }
}
</script>

<style scoped>
</style>