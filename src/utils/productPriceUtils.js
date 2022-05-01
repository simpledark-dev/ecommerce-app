const calculateProductPrices = product => {
  if (product.price_in_USD) {
    const price = product.price_in_USD
    const discountedPrice = product.price_in_USD * (1 - product.discount)
    return {
      minPrice: price,
      maxPrice: price,
      discount: product.discount,
      discountedMinPrice: discountedPrice,
      discountedMaxPrice: discountedPrice
    }
  }

  const variationsSelectionInfo =
    product.variations.variations_selection_info || []
  const discount = product.discount || 0

  const minVariationPrice = Math.min(
    ...variationsSelectionInfo.map(
      variationsSelection => variationsSelection.price_in_USD
    )
  )
  const maxVariationPrice = Math.max(
    ...variationsSelectionInfo.map(
      variationsSelection => variationsSelection.price_in_USD
    )
  )

  const discountedMinPrice = minVariationPrice * (1 - discount)
  const discountedMaxPrice = maxVariationPrice * (1 - discount)

  return {
    minPrice: minVariationPrice,
    maxPrice: maxVariationPrice,
    discount,
    discountedMinPrice,
    discountedMaxPrice
  }
}

export { calculateProductPrices }
