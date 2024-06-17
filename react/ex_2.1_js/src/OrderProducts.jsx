export const OrderProducts = ({ products }) => {
  let parsedProducts = products
  if (products.length > 2) {
    const [firstProduct, secondProduct] = products

    parsedProducts = [firstProduct, secondProduct, '...']
  }

  const formattedProducts = parsedProducts.join(', ')

  return <span>{formattedProducts}</span>
}
