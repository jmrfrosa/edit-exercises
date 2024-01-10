import { FC } from 'react'
import { Order } from './types'
import { StatusBadge } from './Row/StatusBadge'
import { ProductList } from './Row/ProductList'
import { OrderPrice } from './Row/OrderPrice'

const tdStyle = {
  padding: '.5rem',
  paddingLeft: '.5rem',
  paddingTop: '.3rem',
  paddingBottom: '.3rem',
  borderTop: '1px solid #d8d8d8de',
}

type Props = {
  order: Order
}

export const OrderRow: FC<Props> = ({ order }) => {
  return (
    <tr>
      <td style={tdStyle}>{order.id}</td>
      <td style={tdStyle}>
        <StatusBadge status={order.status} />
      </td>
      <td style={tdStyle}>
        <ProductList products={order.products} />
      </td>
      <td style={tdStyle}>
        <OrderPrice
          price={order.price}
          currency={order.currency}
        />
      </td>
    </tr>
  )
}
