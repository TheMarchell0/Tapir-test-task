import axios from 'axios'

export function fetchProducts(page = 1, limit = 1) {
  return axios.get(`https://test-task-api.tapir.ws/products?page=${page}&limit=${limit}`)
}
