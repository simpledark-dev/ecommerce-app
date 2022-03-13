const calculateProductPrices = product => {
  const basePrice = product.base_price_in_USD
  const variations = product.variations || []
  const discount = product.discount || 0

  // Get min and max price
  let minPrice = basePrice
  let maxPrice = basePrice

  variations.forEach(variation => {
    const prices = variation.variation_price_list.map(
      variationPrice => variationPrice.price_in_USD
    )
    minPrice += Math.min(...prices)
    maxPrice += Math.max(...prices)
  })

  const discountedMinPrice = minPrice * (1 - discount)
  const discountedMaxPrice = maxPrice * (1 - discount)

  return {
    minPrice,
    maxPrice,
    discount,
    discountedMinPrice,
    discountedMaxPrice
  }
}

const getLowestPricedProduct = products => {
  return Math.min(
    ...products.map(
      product => calculateProductPrices(product).discountedMinPrice
    )
  )
}
const getHighestPricedProduct = products => {
  return Math.max(
    ...products.map(
      product => calculateProductPrices(product).discountedMaxPrice
    )
  )
}

export {
  calculateProductPrices,
  getLowestPricedProduct,
  getHighestPricedProduct
}
