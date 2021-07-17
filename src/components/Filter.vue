<template>
  <div class="flex justify-between py-3 border-b mb-10">
    <div>{{count}} Items</div>
    <div>Sort by: <select class="ml-2" v-on:change="sortProducts"><option value="latest">Latest</option><option value="lowest">Lowest</option><option value="highest">Highest</option></select></div>
  </div>
</template>

<script>

export default {
  name: 'ProductFilter',
  props: [
      'count'
  ],
  methods: {
    sortProducts(event) {
      this.$emit('clicked', event.target.value)
    }
  }
}
</script>

<style scoped>
</style>