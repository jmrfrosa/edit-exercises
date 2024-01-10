import { FC } from 'react'

type Props = {
  price: number
  currency: 'EUR' | 'USD' | 'GBP'
}

export const OrderPrice: FC<Props> = ({ price, currency }) => {
  const formattedPrice = new Intl.NumberFormat('en', {
    style: 'currency',
    currency,
  }).format(price)

  return <span>{formattedPrice}</span>
}
