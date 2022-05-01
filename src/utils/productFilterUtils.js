import { calculateProductPrices } from './productPriceUtils'

const getFilteredProducts = (productList, categorySelectedList, priceRange) => {
  return [...productList].filter(product => {
    // Check selected categories
    const hasSelectedCategories = categorySelectedList.every(
      selectedCategory => {
        if (selectedCategory.selectedValues.length === 0) return true
        const productCategory = product.categories.find(
          category => category.category_id === selectedCategory.id
        )
        if (!productCategory) return false
        const sharedValues = selectedCategory.selectedValues.filter(value =>
          productCategory.values.includes(value)
        )
        return sharedValues.length > 0
      }
    )
    // Check price range
    const { discountedMinPrice, discountedMaxPrice } =
      calculateProductPrices(product)
    const withinPriceRange =
      (discountedMinPrice >= priceRange.min &&
        discountedMinPrice <= priceRange.max) ||
      (discountedMaxPrice >= priceRange.min &&
        discountedMaxPrice <= priceRange.max)

    return hasSelectedCategories && withinPriceRange
  })
}

export { getFilteredProducts }
