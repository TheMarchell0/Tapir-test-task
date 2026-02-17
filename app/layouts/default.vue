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
</script>

<style>
.main-container {
  min-height: 100dvh;
  display: flex;
  align-items: center;
}
</style>
