<template>
  <footer class="footer">
    <div class="footer__container container">
      <div v-for="column in columns" :key="column.title" class="footer__column">
        <p class="footer__column-title">
          {{ column.title }}
        </p>

        <ul class="footer__column-list">
          <li v-for="link in column.links" :key="link" class="footer__column-list-item">
            <a href="#" class="footer__column-list-text">{{ link }}</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const columns = [
  {
    title: 'Каталог',
    links: [
      'Все бренды',
      'Nike',
      'Adidas',
      'Puma',
      'New Balance',
    ],
  },
  {
    title: 'Помощь',
    links: [
      'Доставка',
      'Заказ и оплата',
      'Обмен и Возврат',
      'F. A. Q.',
    ],
  },
  {
    title: 'Информация',
    links: [
      'Преимущества',
      'Гарантия и безопасность',
      'Индивидуальный заказ',
      'Акции',
    ],
  },
  {
    title: 'Компания',
    links: [
      'О нас',
      'Блог',
      'Отзывы',
      'Контакты',
    ],
  },
]
</script>

<style lang="scss">
@use '@/styles/mixins' as *;

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
