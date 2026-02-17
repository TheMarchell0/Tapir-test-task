<template>
  <div class="prices">
    <p class="prices__item">
      {{ price }} ₽
    </p>
    <p class="prices__item prices__item--x2">
      {{ priceX2 }} ₽ × 2
    </p>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  price: {
    type: Number || String,
    required: true,
  },
})

const priceX2 = computed(() => Math.ceil(Number(props.price) / 2))
</script>

<style lang="scss">
@use '@/styles/mixins' as *;

.prices {
  display: flex;
  gap: 10px;
  align-items: center;

  @include mobile {
    flex-direction: column;
    align-items: initial;
    gap: 4px;
  }

  &__item {
    font-weight: 500;
    font-size: 24px;
    color: var(--black);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 125px;

    &--x2 {
      font-weight: 500;
      font-size: 14px;
      letter-spacing: -0.05em;
      color: var(--white);
      background-color: var(--black);
      padding: 1px 5px;
      box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.12);
      width: fit-content;
    }
  }
}
</style>
