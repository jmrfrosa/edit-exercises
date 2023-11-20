import './style.css'

enum OrderStatus {
  draft = 'draft',
  processing = 'processing',
  shipped = 'shipped',
  cancelled = 'cancelled',
}

type Order = {
  id: string
  status: OrderStatus
  products: string[]
}

const orders: Order[] = [
  { id: 'A658', status: OrderStatus.draft, products: ['T-Shirt', 'Polo'] },
  { id: 'A446', status: OrderStatus.processing, products: ['T-Shirt'] },
  { id: 'A883', status: OrderStatus.draft, products: ['Polo', 'Polo'] },
  { id: 'A234', status: OrderStatus.processing, products: ['Camisa', 'Saia'] },
  { id: 'A754', status: OrderStatus.cancelled, products: ['Saia'] },
  { id: 'A236', status: OrderStatus.shipped, products: ['Sweatshirt', 'Vestido'] },
  { id: 'A467', status: OrderStatus.processing, products: ['Camisa', 'Saia'] },
  { id: 'A213', status: OrderStatus.cancelled, products: ['Vestido', 'Top'] },
  { id: 'A783', status: OrderStatus.processing, products: ['T-Shirt', 'Polo'] },
  { id: 'A364', status: OrderStatus.shipped, products: ['T-Shirt', 'Polo'] },
]

// 2., 3.

const tableBodyNode = document.querySelector('#table-body')!

for (const order of orders) {
  const orderRow = document.createElement('tr')

  const id = document.createElement('td')
  const status = document.createElement('td')
  const products = document.createElement('td')

  id.textContent = order.id

  const innerStatusBadge = document.createElement('div')
  innerStatusBadge.classList.add('status-badge')
  innerStatusBadge.textContent = `${order.status.charAt(0).toUpperCase()}${order.status.slice(1)}`

  switch (order.status) {
    case OrderStatus.processing:
      innerStatusBadge.classList.add('status-warning')
      break
    case OrderStatus.shipped:
      innerStatusBadge.classList.add('status-success')
      break
    case OrderStatus.cancelled:
      innerStatusBadge.classList.add('status-error')
      break
    default:
      innerStatusBadge.classList.add('status-info')
  }

  status.appendChild(innerStatusBadge)

  products.appendChild(buildProductsColumn(order.products))

  orderRow.appendChild(id)
  orderRow.appendChild(status)
  orderRow.appendChild(products)

  tableBodyNode.appendChild(orderRow)
}

// 4.

function buildProductsColumn(products: string[]) {
  const productsListNode = document.createElement('ul')

  for (const product of products) {
    const productNode = document.createElement('li')

    productNode.textContent = product

    productsListNode.appendChild(productNode)
  }

  return productsListNode
}
