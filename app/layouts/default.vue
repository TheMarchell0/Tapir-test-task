<template>
  <AppHeader />
  <main>
    <div class="main-container container">
      <slot />
    </div>
  </main>
  <AppFooter />
</template>

<style>
.main-container {
  min-height: 100dvh;
  display: flex;
  align-items: center;
}
</style>
