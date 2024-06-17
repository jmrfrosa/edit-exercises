import { OrderProducts } from './OrderProducts'
import { OrderStatus } from './OrderStatus'

export const ProductRow = ({ order }) => {
  const orderPrice = new Intl.NumberFormat('en', {
    style: 'currency',
    currency: order.currency,
  }).format(order.price)

  return (
    <tr>
      <td>{order.id}</td>
      <td>
        <OrderStatus status={order.status} />
      </td>
      <td>
        <OrderProducts products={order.products} />
      </td>
      <td>{orderPrice}</td>
    </tr>
  )
}
