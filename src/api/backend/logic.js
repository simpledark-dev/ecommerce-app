import { orders, products, reviews } from 'pseudoDB'

export const getProduct = productId => {
  const foundProduct = products.find(product => product.id === productId)

  if (!foundProduct) return null

  const productReviews = reviews.filter(
    review => review.product_id === productId
  )

  let solds = 0
  orders.forEach(order => {
    if (order.status !== 'fulfilled') return
    const foundOrderedProduct = order.order.find(
      product => product.product_id === productId
    )
    if (foundOrderedProduct) solds += foundOrderedProduct.quantity
  })

  return Object.assign({}, foundProduct, {
    reviews: productReviews,
    numFulfilledOrders: solds
  })
}
