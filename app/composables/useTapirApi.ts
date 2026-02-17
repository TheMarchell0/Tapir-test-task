export const tapirApi = $fetch.create({
  baseURL: import.meta.env.API_BASE_URL || 'https://test-task-api.tapir.ws',
})

export function useTapirApi() {
  function fetchProducts(page = 1, limit = 1) {
    return tapirApi('/products', {
      query: {
        page,
        limit,
      },
    })
  }

  return {
    fetchProducts,
  }
}
