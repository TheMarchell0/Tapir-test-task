<template>
  <footer class="footer">
    <div class="footer__container container">
      <div class="footer__column">
        <p class="footer__column-title">
          Каталог
        </p>

        <ul class="footer__column-list">
          <li class="footer__column-list-item">
            <a href="#" class="footer__column-list-text">Все бренды</a>
          </li>
          <li class="footer__column-list-item">
            <a href="#" class="footer__column-list-text">Nike</a>
          </li>
          <li class="footer__column-list-item">
            <a href="#" class="footer__column-list-text">Adidas</a>
          </li>
          <li class="footer__column-list-item">
            <a href="#" class="footer__column-list-text">Puma</a>
          </li>
          <li class="footer__column-list-item">
            <a href="#" class="footer__column-list-text">New Balance</a>
          </li>
        </ul>
      </div>

      <div class="footer__column">
        <p class="footer__column-title">
          Помощь
        </p>

        <ul class="footer__column-list">
          <li class="footer__column-list-item">
            <a href="#" class="footer__column-list-text">Доставка</a>
          </li>
          <li class="footer__column-list-item">
            <a href="#" class="footer__column-list-text">Заказ и оплата</a>
          </li>
          <li class="footer__column-list-item">
            <a href="#" class="footer__column-list-text">Обмен и Возврат </a>
          </li>
          <li class="footer__column-list-item">
            <a href="#" class="footer__column-list-text">F. A. Q.</a>
          </li>
        </ul>
      </div>

      <div class="footer__column">
        <p class="footer__column-title">
          Информация
        </p>

        <ul class="footer__column-list">
          <li class="footer__column-list-item">
            <a href="#" class="footer__column-list-text">Преимущества</a>
          </li>
          <li class="footer__column-list-item">
            <a href="#" class="footer__column-list-text">Гарантия и безопасность</a>
          </li>
          <li class="footer__column-list-item">
            <a href="#" class="footer__column-list-text">Индивидуальный заказ</a>
          </li>
          <li class="footer__column-list-item">
            <a href="#" class="footer__column-list-text">Акции</a>
          </li>
        </ul>
      </div>

      <div class="footer__column">
        <p class="footer__column-title">
          Компания
        </p>

        <ul class="footer__column-list">
          <li class="footer__column-list-item">
            <a href="#" class="footer__column-list-text">О нас</a>
          </li>
          <li class="footer__column-list-item">
            <a href="#" class="footer__column-list-text">Блог</a>
          </li>
          <li class="footer__column-list-item">
            <a href="#" class="footer__column-list-text">Отзывы</a>
          </li>
          <li class="footer__column-list-item">
            <a href="#" class="footer__column-list-text">Контакты</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.footer {
  background-color: var(--black);
  color: var(--white);
  padding: 100px 0;

  &__container {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
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
