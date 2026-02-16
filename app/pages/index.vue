<template>
  <section class="main">
    <h1 class="main__title">
      Тестовое задание
    </h1>

    <button class="main__button" @click="navigateTo('/catalog')">
      В каталог
    </button>
  </section>
</template>

<script setup>
</script>

<style scoped lang="scss">
.main {
  &__title {
    font-weight: 500;
    font-size: 64px;
    line-height: 110%;
    text-transform: uppercase;
    color: var(--black);
    margin-bottom: 40px;
  }

  &__button {
    min-width: 124px;
    min-height: 40px;
    background: var(--red);
    font-weight: 400;
    font-size: 14px;
    line-height: 143%;
    color: var(--white);
  }
}
</style>
