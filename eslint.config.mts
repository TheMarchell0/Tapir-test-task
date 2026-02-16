import antfu from '@antfu/eslint-config'

export default antfu({
  vue: true,
  typescript: true,
  rules: {
    'vue/block-order': ['error', {
      order: ['template', 'script', 'style'],
    }],
  },
  gitignore: true,
})
