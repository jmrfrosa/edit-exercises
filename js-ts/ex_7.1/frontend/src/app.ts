import {
  addProductButton,
  createOrderForm,
  currencySelectorNode,
  priceTotalsNode,
  productsToAddNode,
  tableBodyNode,
  tableTotalsNode,
} from './common'
import './style.css'
import { Order, Product } from './types'

const orderStateToClass: Record<string, string> = {
  processing: 'status-warning',
  shipped: 'status-success',
  cancelled: 'status-error',
  draft: 'status-info',
}

const currencyToSymbol: Record<string, string> = {
  EUR: '€',
  USD: '$',
  GBP: '£',
}

const currencyRates: Record<string, number> = {
  EUR: 1,
  USD: 1.09,
  GBP: 0.87,
}

let totalOrders = 0
let pricePerCurrency: Record<string, number> = {}

function clearOrdersTable() {
  tableBodyNode.innerHTML = ''
}

function buildOrdersTable(orders: Order[], products: Product[]) {
  clearOrdersTable()

  for (const order of orders) {
    const orderRow = document.createElement('tr')

    const idCol = document.createElement('td')
    const statusCol = document.createElement('td')
    const productsCol = document.createElement('td')
    const priceCol = document.createElement('td')

    idCol.textContent = order.id
    productsCol.textContent = `${order.products.length} product(s)`

    // O preço da order é a soma do preço de cada produto
    const orderPrice = order.products.reduce((acc, product) => {
      const dbProduct = products.find((p) => p.name === product.name)

      if (!dbProduct)
        throw new Error(`Invalid product found in the list: ${product.name}`)

      const productPriceInOrderCurrency = convertCurrency(
        dbProduct.price,
        dbProduct.currency,
        order.currency
      )

      return acc + productPriceInOrderCurrency * product.quantity
    }, 0)

    pricePerCurrency[order.currency] =
      (pricePerCurrency[order.currency] ?? 0) + orderPrice

    priceCol.textContent = formatPrice({
      amount: orderPrice,
      currency: order.currency,
    })

    const innerStatusBadge = document.createElement('div')
    innerStatusBadge.classList.add(
      'status-badge',
      orderStateToClass[order.status]
    )
    innerStatusBadge.textContent = `${order.status
      .charAt(0)
      .toUpperCase()}${order.status.slice(1)}`

    statusCol.appendChild(innerStatusBadge)

    orderRow.appendChild(idCol)
    orderRow.appendChild(statusCol)
    orderRow.appendChild(productsCol)
    orderRow.appendChild(priceCol)

    tableBodyNode.appendChild(orderRow)

    totalOrders += 1
  }

  tableTotalsNode.textContent = `${totalOrders} order(s)`
  priceTotalsNode.textContent = formatTotalPrice(pricePerCurrency, 'EUR')
}

async function fetchOrders() {
  const response = await fetch('http://localhost:3000/orders', {
    method: 'GET',
  })

  const orders = (await response.json()) as Order[]
  const products = await fetchProducts()

  buildOrdersTable(orders, products)
}

async function fetchProducts() {
  const response = await fetch('http://localhost:3000/products', {
    method: 'GET',
  })
  return (await response.json()) as Product[]
}

currencySelectorNode.addEventListener('change', (event) => {
  const currency = (event.currentTarget as HTMLSelectElement).value

  priceTotalsNode.textContent = formatTotalPrice(pricePerCurrency, currency)
})

addProductButton.addEventListener('click', async () => {
  const products = await fetchProducts()

  const wrapperDiv = document.createElement('div')
  const productSelector = document.createElement('select')
  const productQuantity = document.createElement('input')

  productSelector.setAttribute('name', 'product-name')
  productQuantity.setAttribute('name', 'product-quantity')
  productQuantity.setAttribute('type', 'number')

  for (const product of products) {
    const productOption = document.createElement('option')
    productOption.setAttribute('value', product.name)
    productOption.textContent = product.name

    productSelector.appendChild(productOption)
  }

  wrapperDiv.appendChild(productSelector)
  wrapperDiv.appendChild(productQuantity)

  productsToAddNode.appendChild(wrapperDiv)
})

createOrderForm.addEventListener('submit', async (event) => {
  event.preventDefault()

  const form = new FormData(createOrderForm)

  const orderCurrency = form.get('order-currency')
  const productNames = form.getAll('product-name')
  const productQuantities = form.getAll('product-quantity')

  const products = productNames.map((productName, index) => ({
    name: productName,
    quantity: productQuantities[index],
  }))

  const body = {
    currency: orderCurrency,
    products,
  }

  await fetch('http://localhost:3000/orders', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })

  await fetchOrders()

  createOrderForm.reset()
  productsToAddNode.innerHTML = ''
})

function formatTotalPrice(
  pricePerCurrency: Record<string, number>,
  selectedCurrency: string
) {
  return `${formatPrice({
    amount: calcTotalInCurrency(pricePerCurrency, selectedCurrency),
    currency: selectedCurrency,
  })}`
}

function formatPrice(price: { amount: number; currency: string }) {
  const { amount, currency } = price

  return `${currencyToSymbol[currency]} ${amount.toFixed(2)}`
}

function convertCurrency(
  amount: number,
  fromCurrency: string,
  toCurrency: string
) {
  const rate = currencyRates[toCurrency] / currencyRates[fromCurrency]

  if (Number.isNaN(rate)) {
    throw new Error("You're using an unspecified currency")
  }

  return amount * rate
}

function calcTotalInCurrency(
  pricePerCurrency: Record<string, number>,
  finalCurrency: string
) {
  let total = 0
  for (const [currency, amount] of Object.entries(pricePerCurrency)) {
    total += convertCurrency(amount, currency, finalCurrency)
  }

  return total
}

fetchOrders()
