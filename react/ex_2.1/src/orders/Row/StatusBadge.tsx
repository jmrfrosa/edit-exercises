import { FC } from 'react'
import { Order } from '../types'

const statusToTagMap: Record<
  Order['status'],
  { label: string; color: string }
> = {
  draft: { label: 'Draft', color: '#235CDB' },
  processing: { label: 'Processing', color: '#DB9A02' },
  shipped: { label: 'Shipped', color: '#0DDB8C' },
  cancelled: { label: 'Cancelled', color: '#DB4C2E' },
}

type Props = {
  status: Order['status']
}

export const StatusBadge: FC<Props> = ({ status }) => {
  const tag = statusToTagMap[status]

  return (
    <div
      style={{
        padding: '.3rem',
        color: '#f4f4ea',
        fontWeight: 'bold',
        border: '1px solid rgba(255, 255, 255, 0.5)',
        backgroundColor: tag.color,
      }}
    >
      {tag.label}
    </div>
  )
}
