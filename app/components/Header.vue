<template>
  <header class="header">
    <div class="header__container container">
      <div class="header__logo">
        <a v-if="!isHomePage" href="/">
          <img src="../assets/images/logo.svg" alt="Логотип" width="42" height="42" class="header__logo-img">
        </a>
        <img v-else src="../assets/images/logo.svg" alt="Логотип" width="42" height="42" class="header__logo-img">
      </div>

      <nav class="header__nav">
        <a href="#" class="header__nav-link">Мужчинам</a>
        <a href="#" class="header__nav-link">Женщинам</a>
        <a href="#" class="header__nav-link">Каталог</a>
        <a href="#" class="header__nav-link">Доставка</a>
        <a href="#" class="header__nav-link">Блог</a>
        <a href="#" class="header__nav-link">О нас</a>
      </nav>

      <div class="header__burger">
        <Burger />
      </div>
    </div>
  </header>
</template>

<script setup>
import { useRoute } from '#app'
import { computed } from 'vue'
import Burger from '~/components/icons/Burger.vue'

const route = useRoute()

const isHomePage = computed(() => route.path === '/')
</script>

<style lang="scss">
@use '@/styles/mixins' as *;

.header {
  display: flex;
  align-items: center;
  min-height: 82px;

  @include mobile {
    min-height: 63px;
  }

  &__container {
    display: flex;
    align-items: center;
    width: 100%;

    @include tablet {
      justify-content: space-between;
    }
  }

  &__logo {
    &-img {
      @include mobile {
        width: 28px;
        height: 28px;
      }
    }
  }

  &__nav {
    margin: 0 auto;
    background-color: var(--gray1);
    padding: 10px 24px;
    display: flex;
    align-items: center;
    gap: 40px;

    @include tablet {
      display: none;
    }

    &-link {
      font-weight: 400;
      font-size: 14px;
      line-height: 143%;
      color: var(--black);
    }
  }

  &__burger {
    width: 40px;
    height: 40px;
    display: none;
    justify-content: center;
    align-items: center;
    background-color: var(--gray1);

    @include tablet {
      display: flex;
    }
  }
}
</style>
