<template>
  <div class="catalog-content">
    <div class="catalog-content__list">
      <CatalogCard
        v-for="product in data.products"
        :key="product.id"
        :product="product"
      />
    </div>

    <LoadMoreButton
      v-if="hasMore"
      :error="!!error"
      :loading="pending"
      @click="page++"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { fetchProducts } from '@/services/api.js'

const CATALOG_KEY = 'catalog-list'

const { isMobile } = useResponsive()

const page = ref(1)

const limit = computed(() => (isMobile.value ? 6 : 16))

const { data, error, pending, clear: clearCache } = useAsyncData(
  CATALOG_KEY,
  async (nuxtApp) => {
    const { data } = await fetchProducts(page.value, limit.value)

    const previousData = nuxtApp._asyncData[CATALOG_KEY]?.data.value

    if (previousData) {
      data.products = [...previousData.products, ...data.products]
    }

    return data
  },
  {
    watch: [page, limit],
  },
)

const hasMore = computed(() => {
  return page.value < data.value?.totalPages
})

watch(limit, () => {
  page.value = 1
  clearCache()
}, { flush: 'sync' })
</script>

<style lang="scss">
.catalog-content {
  &__list {
    display: grid;
    grid-template-columns: repeat(4, minmax(290px, 1fr));
    gap: 40px;
    margin-bottom: 110px;

    @include laptop {
      grid-template-columns: repeat(3, minmax(270px, 1fr));
    }

    @include tablet {
      grid-template-columns: repeat(2, minmax(220px, 1fr));
      margin-bottom: 50px;
    }

    @include mobile {
      grid-template-columns: repeat(2, minmax(150px, 1fr));
      gap: 20px;
      margin-bottom: 40px;
    }
  }
}
</style>
