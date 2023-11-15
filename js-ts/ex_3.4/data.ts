type Order = {
  id: string
  price: {
    amount: number
    currency: string
  }
  products: string[]
}

export const orders: Order[] = [
  { id: 'A554', price: { amount: 12.99, currency: 'USD' }, products: ['T-Shirt'] },
  { id: 'A222', price: { amount: 22.43, currency: 'EUR' }, products: ['T-Shirt', 'Gravata'] },
  { id: 'A878', price: { amount: 58.13, currency: 'USD' }, products: ['T-Shirt', 'T-Shirt', 'Polo'] },
  { id: 'A192', price: { amount: 10.45, currency: 'GBP' }, products: ['Livro'] },
  { id: 'A032', price: { amount: 12.99, currency: 'EUR' }, products: ['T-Shirt'] },
  { id: 'A333', price: { amount: 99.32, currency: 'EUR' }, products: ['Sweater', 'Polo', 'Camisa'] },
  { id: 'A876', price: { amount: 74.00, currency: 'USD' }, products: ['Sweater', 'Livro', 'Livro'] },
  { id: 'A234', price: { amount: 32.56, currency: 'USD' }, products: ['Polo', 'Sweater'] },
]
