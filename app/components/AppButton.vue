<template>
  <button :class="`app-button app-button--${type} app-button--${size}`">
    <slot />
  </button>
</template>

<script lang="ts" setup>
type ButtonType = 'primary' | 'secondary' | 'outlined'
type ButtonSize = 'small' | 'medium'

interface Props {
  type?: ButtonType
  size?: ButtonSize
}

withDefaults(defineProps<Props>(), {
  type: 'primary',
  size: 'medium',
})
</script>

<style lang="scss">
.app-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  padding: 10px 24px;

  &--small {
    padding: 8px;
  }

  &--primary {
    background: var(--red);
    color: var(--white);
  }

  &--secondary {
    background: var(--gray1);
    color: var(--black);
  }

  &--outlined {
    outline: 1px solid var(--black);
    outline-offset: -1px;
    color: var(--black);
  }
}
</style>
