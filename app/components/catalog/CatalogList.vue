<template>
  <div class="catalog-content">
    <div class="catalog-content__list">
      <CatalogCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>

    <LoadMoreButton
      v-if="hasMore"
      :error="error"
      :loading="loading"
      @click="loadMore"
      @retry="retry"
    />
  </div>
</template>

<script setup>
import { useMediaQuery } from '@vueuse/core'
import { onMounted, ref } from 'vue'
import CatalogCard from '~/components/catalog/CatalogCard.vue'
import LoadMoreButton from '~/components/LoadMoreButton.vue'
import { fetchProducts } from '~/services/api.js'

const products = ref([])
const page = ref(1)
const loading = ref(false)
const error = ref(false)
const hasMore = ref(true)

const isDesktop = useMediaQuery('(max-width: 1024px)', {
  ssrWidth: 767,
})

const limit = computed(() => (isDesktop.value ? 16 : 6))

async function loadProducts() {
  loading.value = true
  error.value = false
  try {
    const { data } = await fetchProducts(page.value, limit.value)
    if (data.products) {
      products.value.push(...data.products)
      page.value++
    }
    else {
      hasMore.value = false
    }
  }
  catch (e) {
    error.value = true
  }
  finally {
    loading.value = false
  }
}

function loadMore() {
  loadProducts()
}

function retry() {
  loadProducts()
}

onMounted(() => {
  loadProducts()
  console.log(isDesktop.value)
})
</script>

<style scoped lang="scss">
.catalog-content {
  &__list {
    display: grid;
    grid-template-columns: repeat(4, 290px);
    gap: 40px;
  }
}
</style>
