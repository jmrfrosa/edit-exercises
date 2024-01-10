import { FC } from 'react'

type Props = {
  products: string[]
}

export const ProductList: FC<Props> = ({ products }) => {
  if (products.length > 2) {
    const [firstProduct, secondProduct] = products

    return <span>{[firstProduct, secondProduct].join(', ')}, ...</span>
  }

  return <span>{products.join(', ')}</span>
}
