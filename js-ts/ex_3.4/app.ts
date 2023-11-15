import { orders } from "./data.js"

// 1.
function findOrder(id: string) {
  return orders.find((order) => order.id === id)
}

console.log(findOrder('A192'))

// 2. A usar (for ... of)
let pricePerCurrencyWithForOf = {}
for (const order of orders) {
  const { amount, currency } = order.price

  const sumForCurrency = pricePerCurrencyWithForOf[currency] ?? 0

  pricePerCurrencyWithForOf[currency] = sumForCurrency + amount
}

console.log(pricePerCurrencyWithForOf)


// 2. A usar reduce
const pricePerCurrencyWithReduce = orders.reduce((acc, order) => {
  const { amount, currency } = order.price

  const sumForCurrency = acc[currency] ?? 0

  acc[currency] = sumForCurrency + amount

  return acc
}, {})

console.log(pricePerCurrencyWithReduce)

// 3.
const orderToClone = findOrder('A032')

for (let i = 0; i < 4; i++) {
  orders.push({ ...orderToClone })
}

console.table(orders)
