import { ProductRow } from './ProductRow'

const orders = [
  {
    id: 'A658',
    status: 'draft',
    products: ['T-Shirt', 'Polo'],
    price: 27.49,
    currency: 'EUR',
  },
  {
    id: 'A446',
    status: 'processing',
    products: ['T-Shirt'],
    price: 8.67,
    currency: 'GBP',
  },
  {
    id: 'A883',
    status: 'draft',
    products: ['Polo', 'Polo', 'Saia'],
    price: 35.74,
    currency: 'USD',
  },
  {
    id: 'A234',
    status: 'processing',
    products: ['Camisa', 'Saia'],
    price: 22.96,
    currency: 'USD',
  },
  {
    id: 'A754',
    status: 'cancelled',
    products: ['Saia'],
    price: 3.99,
    currency: 'EUR',
  },
  {
    id: 'A236',
    status: 'shipped',
    products: ['Sweatshirt', 'Vestido', 'Top'],
    price: 39.18,
    currency: 'GBP',
  },
  {
    id: 'A467',
    status: 'processing',
    products: ['Camisa', 'Saia'],
    price: 18.99,
    currency: 'EUR',
  },
  {
    id: 'A213',
    status: 'cancelled',
    products: ['Vestido', 'Top'],
    price: 14.32,
    currency: 'EUR',
  },
  {
    id: 'A783',
    status: 'processing',
    products: ['T-Shirt', 'Polo', 'Saia'],
    price: 25.22,
    currency: 'GBP',
  },
  {
    id: 'A364',
    status: 'shipped',
    products: ['T-Shirt', 'Polo'],
    price: 31.21,
    currency: 'USD',
  },
]

export const ProductsTable = () => {
  return (
    <table>
      <thead>
        <th>ID</th>
        <th>Estado</th>
        <th>Produtos</th>
        <th>Preço</th>
      </thead>
      <tbody>
        {orders.map((o) => {
          return (
            <ProductRow
              key={o.id}
              order={o}
            />
          )
        })}
      </tbody>
    </table>
  )
}
