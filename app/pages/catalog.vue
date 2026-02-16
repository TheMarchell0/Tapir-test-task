<template>
  <section class="catalog">
    <h1 class="catalog__title">
      Каталог
    </h1>

    <CatalogList />
  </section>
</template>

<script setup>
import CatalogList from '../components/catalog/CatalogList.vue'

useHead({
  title: 'Каталог - Тестовое задание',
})
</script>

<style scoped lang="scss">
.catalog {
  &__title {
    font-weight: 500;
    font-size: 42px;
    line-height: 110%;
    text-transform: uppercase;
    color: var(--black);
    text-align: center;
    margin: 100px 0 110px;
  }
}
</style>
