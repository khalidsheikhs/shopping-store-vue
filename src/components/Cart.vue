<template>
  <div class="bg-white md:col-span-2 md:col-start-8 divide-y border-l">
    <div v-if="!cartItems.length" class="p-3">Cart is empty</div>
    <div v-else class="p-3">You have {{cartItems.length}} item(s) in cart</div>
    <div v-if="cartItems.length" class="p-4 pb-0">
      <div v-for="(item, index) in cartItems" :key="index" class="gap-3 grid grid-cols-3 mb-4">
        <figure class="h-28"><img :src="item.image" :alt="item.title" class="h-full mx-auto" /></figure>
        <div class="text-sm col-span-2">
          <div>{{item.title}}</div>
          <div class="flex items-center justify-between">
            <div>{{item.count}} X {{formatCurrency(item.price)}}</div>
            <div>
              <button class="px-3 py-1 rounded-lg text-sm text-gray-800 bg-gray-300 focus:outline-none border-4 border-white focus:border-gray-200 transition-all" v-on:click="removeFromCart(item)">Remove</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="cartItems.length" class="grid grid-cols-2 items-center gap-5 p-3">
      <div class="text-gray-600 text-lg">Total: {{formatCurrency(getTotalAmount())}}</div>
      <div class="text-right">
        <button class="px-5 py-3 rounded-xl text-sm font-medium text-white bg-pink-600 hover:bg-pink-800 active:bg-grey-900 focus:outline-none border-4 border-white focus:border-purple-200 transition-all">Proceed</button>
      </div>
    </div>
  </div>
</template>

<script>
import * as util from '../services/util'

export default {
  name: 'Cart',
  methods: {
    formatCurrency: (amount) => {
      return util.formatCurrency(amount)
    },
    getTotalAmount() {
      let amount = 0;
      let cartItems = this.$store.state.cartItems;
      if (cartItems.length) {
        cartItems.forEach((item) => {
          amount += item.count * item.price;
        });
      }
      return amount.toFixed(2).toLocaleString();
    },
    removeFromCart(item) {
      this.$store.dispatch('removeItem', item)
    }
  },
  computed: {
    cartItems () {
      return this.$store.state.cartItems
    }
  }
}
</script>

<style scoped>
</style>