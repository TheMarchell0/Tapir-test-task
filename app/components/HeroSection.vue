<template>
  <section class="home-page">
    <h1 class="home-page__title">
      Тестовое задание
    </h1>

    <AppButton type="primary" @click="navigateTo('/catalog')">
      В каталог
    </AppButton>
  </section>
</template>

<script setup>

</script>

<style lang="scss">
.home-page {
  &__title {
    font-weight: 500;
    font-size: 64px;
    line-height: 110%;
    text-transform: uppercase;
    color: var(--black);
    margin-bottom: 40px;
    width: 100%;

    @include mobile {
      font-size: 26px;
      max-width: 150px;
    }
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
