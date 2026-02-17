<template>
  <div class="load-more">
    <p v-if="loading" class="load-more__text">
      Загрузка...
    </p>
    <p v-if="error" class="load-more__text">
      Произошла ошибка, попробуйте позже
    </p>
    <AppButton v-if="!loading" type="outlined" @click="emit('click')">
      {{ error ? 'Повторить' : 'Показать ещё' }}
    </AppButton>
  </div>
</template>

<script setup>
const props = defineProps({
  loading: {
    type: Boolean,
    required: true,
  },
  error: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits(['click'])
</script>

<style lang="scss">
.load-more {
  min-height: 100px;
  margin: 0 auto 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @include mobile {
    margin: 0 auto 40px;
    min-height: initial;
  }

  &__text {
    font-weight: 400;
    font-size: 14px;
    line-height: 143%;
    color: var(--black);
    min-height: 40px;
  }

  &__button {
    border: 1px solid var(--black);
    padding: 9px 15px;
    min-width: 144px;
    font-weight: 400;
    font-size: 14px;
    line-height: 143%;
    color: var(--black);
  }
}
</style>
