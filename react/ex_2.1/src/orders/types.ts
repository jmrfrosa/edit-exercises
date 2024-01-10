export type Order = {
  id: string
  status: 'draft' | 'processing' | 'shipped' | 'cancelled'
  products: string[]
  price: number
  currency: 'EUR' | 'GBP' | 'USD'
}
