<template>
  <Header />
  <main>
    <div class="main-container container">
      <slot />
    </div>
  </main>
  <Footer />
</template>

<script setup>
import Footer from '../components/Footer.vue'
import Header from '../components/Header.vue'
</script>

<style scoped>
.main-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
}
</style>
