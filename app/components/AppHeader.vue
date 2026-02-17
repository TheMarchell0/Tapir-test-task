<template>
  <header class="header">
    <div class="header__container container">
      <div class="header__logo">
        <NuxtLink v-if="!isHomePage" to="/">
          <img src="/images/logo.svg" alt="Логотип" width="42" height="42" class="header__logo-img">
        </NuxtLink>
        <img v-else src="/images/logo.svg" alt="Логотип" width="42" height="42" class="header__logo-img">
      </div>

      <nav class="header__nav">
        <NuxtLink v-for="link in links" :key="link.label" :to="link.to" class="header__nav-link">
          {{ link.label }}
        </NuxtLink>
      </nav>

      <AppButton class="header__burger" type="secondary" size="small">
        <Burger />
      </AppButton>
    </div>
  </header>
</template>

<script lang="ts" setup>
import type { RouteLocationRaw } from 'vue-router'
import { useRoute } from '#app'
import { computed } from 'vue'
import Burger from '~/components/icons/Burger.vue'

interface HeaderLink {
  label: string
  to: RouteLocationRaw
}

const route = useRoute()

const isHomePage = computed(() => route.path === '/')

const links: HeaderLink[] = [
  { label: 'Мужчинам', to: '#' },
  { label: 'Женщинам', to: '#' },
  { label: 'Каталог', to: '#' },
  { label: 'Доставка', to: '#' },
  { label: 'Блог', to: '#' },
  { label: 'О нас', to: '#' },
]
</script>

<style lang="scss">
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

    @include to-laptop {
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

    @include to-laptop {
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

    @include from-tablet {
      display: none;
    }
  }
}
</style>
