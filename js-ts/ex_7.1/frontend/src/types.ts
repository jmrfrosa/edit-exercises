export enum OrderStatus {
  draft = 'draft',
  processing = 'processing',
  shipped = 'shipped',
  cancelled = 'cancelled',
}

export type Product = {
  name: string
  price: number
  currency: string
}

export type OrderProduct = {
  name: string
  quantity: number
}

export type Order = {
  id: string
  status: OrderStatus
  products: OrderProduct[]
  currency: string
}
