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
import { ref } from 'vue'
import { fetchProducts } from '@/services/api.js'

const products = ref([])
const page = ref(1)
const loading = ref(false)
const error = ref(false)
const hasMore = ref(true)

const { isMobile } = useResponsive()

const limit = computed(() => (isMobile.value ? 6 : 16))

watch(isMobile, () => {
  page.value = 1
  products.value = []
  loadProducts()
})

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
