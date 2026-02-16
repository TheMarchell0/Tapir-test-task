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
      @click="loadProducts"
    />
  </div>
</template>

<script setup>
import { useMediaQuery } from '@vueuse/core'
import { ref } from 'vue'
import CatalogCard from '../../components/catalog/CatalogCard.vue'
import LoadMoreButton from '../../components/LoadMoreButton.vue'
import { fetchProducts } from '../../services/api.js'

const products = ref([])
const page = ref(1)
const loading = ref(false)
const error = ref(false)
const hasMore = ref(true)

const isMobile = useMediaQuery('(max-width: 767px)')

const limit = computed(() => (isMobile.value ? 6 : 16))

async function loadProducts() {
  loading.value = true
  error.value = false

  try {
    const { data } = await fetchProducts(page.value, limit.value)

    products.value.push(...data.products)

    if (data.products.length < limit.value) {
      hasMore.value = false
    }

    else {
      page.value++
    }
  }

  catch (e) {
    error.value = true
  }

  finally {
    loading.value = false
  }
}

loadProducts()
</script>

<style scoped lang="scss">
.catalog-content {
  &__list {
    display: grid;
    grid-template-columns: repeat(4, 290px);
    gap: 40px;
    margin-bottom: 110px;
  }
}
</style>
