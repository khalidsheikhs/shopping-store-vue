<template>
  <div class="grid-container">
    <Header />
    <main class="bg-gray-100">
      <div class="container-none mx-auto">
        <router-view />
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
</style>