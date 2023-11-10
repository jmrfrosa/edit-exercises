// 1.
const order = {
  id: '001',
  customer: {
    name: 'Carlos Silva',
    email: 'carlos_silva13@gmail.com',
  },
  price: {
    amount: 11.23,
    currency: '€',
  },
  isShipped: false,
  products: ['T-shirt Branca'],
}

// 2.
order.isShipped = true

console.log(order)

// 3.
const formatPrice = (price: { amount: number, currency: string }) => {
  const { amount, currency } = price

  return `${currency} ${amount.toFixed(2)}`
}

console.log(formatPrice(order.price))

// 4.
order.products.push('T-Shirt Preta')

// 5.
type Order = {
  id: string,
  customer: {
    name?: string
    email: string
  }
  price: {
    amount: number
    currency: string
  }
  isShipped: boolean
  products: string[]
}

// 6.
const generateLabel = (order: Order) => {
  return `Olá ${order.customer.name},\nObrigado pela tua encomenda de ${order.products.join(', ')} pelo valor de ${formatPrice(order.price)}.`
}

console.log(generateLabel(order))
