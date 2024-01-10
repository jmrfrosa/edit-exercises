import orderData from '../../data.json'
import { OrderRow } from './OrderRow'
import { Order } from './types'

const orders = orderData as Order[]

export const OrderTable = () => {
  return (
    <table style={{ backgroundColor: 'white', borderSpacing: 0 }}>
      <thead style={{ paddingTop: '.5rem', paddingBottom: '.5rem' }}>
        <tr>
          <th>ID</th>
          <th>Estado</th>
          <th>Produtos</th>
          <th>Preço</th>
        </tr>
      </thead>
      <tbody style={{ paddingTop: '.5rem', paddingBottom: '.5rem' }}>
        {orders.map((order) => (
          <OrderRow
            key={order.id}
            order={order}
          />
        ))}
      </tbody>
    </table>
  )
}
