export interface PaginatedResponse {
  currentPage: number
  limit: number
  total: number
  totalPages: number
}

export interface Product {
  id: number
  image: string
  name: string
  price: number
}

export interface ProductResponse extends PaginatedResponse {
  products: Product[]
}
