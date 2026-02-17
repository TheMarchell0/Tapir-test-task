<template>
  <section class="hero-section">
    <h1 class="hero-section__title">
      Тестовое задание
    </h1>

    <AppButton class="hero-section__to-catalog" type="primary" @click="navigateTo('/catalog')">
      В каталог
    </AppButton>
  </section>
</template>

<style lang="scss">
.hero-section {
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

  &__to-catalog {
    min-width: 124px;
  }
}
</style>
