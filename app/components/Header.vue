<template>
  <header class="header">
    <div class="header__container container">
      <div class="header__logo">
        <a v-if="!isHomePage" href="/">
          <img src="../assets/images/logo.svg" alt="Логотип" width="42" height="42">
        </a>
        <img v-else src="../assets/images/logo.svg" alt="Логотип" width="42" height="42">
      </div>

      <nav class="header__nav">
        <a href="#" class="header__nav-link">Мужчинам</a>
        <a href="#" class="header__nav-link">Женщинам</a>
        <a href="#" class="header__nav-link">Каталог</a>
        <a href="#" class="header__nav-link">Доставка</a>
        <a href="#" class="header__nav-link">Блог</a>
        <a href="#" class="header__nav-link">О нас</a>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { useRoute } from '#app'
import { computed } from 'vue'

const route = useRoute()

const isHomePage = computed(() => route.path === '/')
</script>

<style scoped lang="scss">
.header {
  display: flex;
  align-items: center;
  min-height: 82px;

  &__container {
    display: flex;
    align-items: center;
  }

  &__nav {
    margin: 0 auto;
    background-color: var(--gray1);
    padding: 10px 24px;
    display: flex;
    align-items: center;
    gap: 40px;

    &-link {
      font-weight: 400;
      font-size: 14px;
      line-height: 143%;
      color: var(--black);
    }
  }
}
</style>
