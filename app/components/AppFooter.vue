<template>
  <footer class="footer">
    <div class="footer__container container">
      <div v-for="column in columns" :key="column.title" class="footer__column">
        <p class="footer__column-title">
          {{ column.title }}
        </p>

        <ul class="footer__column-list">
          <li v-for="link in column.links" :key="link.label" class="footer__column-list-item">
            <NuxtLink :to="link.to" class="footer__column-list-text">
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

interface FooterLink {
  label: string
  to: RouteLocationRaw
}

interface FooterColumn {
  title: string
  links: FooterLink[]
}

const columns: FooterColumn[] = [
  {
    title: 'Каталог',
    links: [
      { label: 'Все бренды', to: '#' },
      { label: 'Nike', to: '#' },
      { label: 'Adidas', to: '#' },
      { label: 'Puma', to: '#' },
      { label: 'New Balance', to: '#' },
    ],
  },
  {
    title: 'Помощь',
    links: [
      { label: 'Доставка', to: '#' },
      { label: 'Заказ и оплата', to: '#' },
      { label: 'Обмен и Возврат', to: '#' },
      { label: 'F. A. Q.', to: '#' },
    ],
  },
  {
    title: 'Информация',
    links: [
      { label: 'Преимущества', to: '#' },
      { label: 'Гарантия и безопасность', to: '#' },
      { label: 'Индивидуальный заказ', to: '#' },
      { label: 'Акции', to: '#' },
    ],
  },
  {
    title: 'Компания',
    links: [
      { label: 'О нас', to: '#' },
      { label: 'Блог', to: '#' },
      { label: 'Отзывы', to: '#' },
      { label: 'Контакты', to: '#' },
    ],
  },
]
</script>

<style lang="scss">
.footer {
  background-color: var(--black);
  color: var(--white);
  padding: 100px 0;

  @include mobile {
    padding: 57px 0 63px;
  }

  &__container {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;

    @include mobile {
      gap: 60px;
    }
  }

  &__column {
    flex: 1 1 315px;

    &-title,
    &-list-text {
      font-weight: 400;
      font-size: 14px;
      line-height: 140%;
    }

    &-title {
      color: var(--gray2);
      margin-bottom: 14px;
    }

    &-list {

      &-item:not(:last-child) {
        margin-bottom: 13px;
      }

      &-text {
        color: var(--white);
      }
    }
  }
}
</style>
