<template>
  <button :class="`app-button app-button--${type}`">
    <slot />
  </button>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    default: 'primary',
  },
})
</script>

<style lang="scss">
.app-button {
  font-weight: 400;
  font-size: 14px;
  line-height: 143%;
  padding: 9px 29px;

  &--primary {
    background: var(--red);
    color: var(--white);
  }

  &--outlined {
    border: 1px solid var(--black);
    color: var(--black);
  }
}
</style>
