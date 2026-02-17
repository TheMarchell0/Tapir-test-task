<template>
  <a class="catalog-item">
    <p>{{ product.id }}</p>
    <NuxtImg class="catalog-item__img" :src="product.image" :alt="product.name" />
    <ProductPrices :price="product.price" />
    <h3 class="catalog-item__name">
      {{ product.name }}
    </h3>
    <div class="catalog-item__favorite">
      <Favorite />
    </div>
  </a>
</template>

<script setup>
import Favorite from '@/components/icons/Favorite.vue'

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
})
</script>

<style lang="scss">
@use '@/styles/mixins' as *;

.catalog-item {
  position: relative;
  cursor: pointer;

  &__img {
    max-width: 290px;
    width: 100%;
    max-height: 180px;
    object-fit: cover;
    display: block;
    margin: 0 auto 20px;

    @include mobile {
      max-width: 150px;
      height: 93px;
      max-height: initial;
      margin: 0 auto 8px;
    }
  }

  &__name {
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;
    color: var(--black);
    padding-left: 4px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;

    @include mobile {
      font-size: 12px;
      padding-left: initial;
      padding-top: 3px;
      -webkit-line-clamp: 1;
    }
  }

  &__favorite {
    position: absolute;
    top: 9px;
    right: 3px;
    transition: color 0.1s linear;

    &:hover {
      color: var(--red)
    }

    @include mobile {
      top: 0;
      right: 7px;
    }
  }
}
</style>
