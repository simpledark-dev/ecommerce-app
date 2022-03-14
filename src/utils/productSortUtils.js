import { reviews, orders } from 'pseudoDB'
import { SORT_BY_VALUES } from 'constants'
import { calculateProductPrices } from './productPriceUtils'

// Most Popular - Sort product by number of reviews
const getSortedProductsByNumReviews = (productList, reviews) => {
  return [...productList].sort((p1, p2) => {
    const p1NumberOfReviews = [...reviews].filter(
      review => review.product_id === p1.id
    ).length
    const p2NumberOfReviews = [...reviews].filter(
      review => review.product_id === p2.id
    ).length

    // If both products have the same number of reviews, the older product will be more popular
    if (p2NumberOfReviews === p1NumberOfReviews)
      return (
        new Date(p1.upload_time).getTime() - new Date(p2.upload_time).getTime()
      )

    return p2NumberOfReviews - p1NumberOfReviews
  })
}

// Most Recent - Sort product by upload time
const getSortedProductsByUploadTime = productList => {
  return [...productList].sort(
    (p1, p2) =>
      new Date(p2.upload_time).getTime() - new Date(p1.upload_time).getTime()
  )
}

// Best selling - Sort product by number of sells (based on fullfilled orders only)
const getSortedProductsByBestSelling = (productList, orders) => {
  return [...productList].sort((p1, p2) => {
    let soldsP1 = 0
    let soldsP2 = 0
    orders.forEach(order => {
      if (order.status !== 'fulfilled') return
      const p1Found = order.order.find(product => product.product_id === p1.id)
      const p2Found = order.order.find(product => product.product_id === p2.id)
      if (p1Found) soldsP1 += p1Found.quantity
      if (p2Found) soldsP2 += p2Found.quantity
    })

    return soldsP2 - soldsP1
  })
}

// Price Low to High or High to Low
const getSortedProductsByPrice = (productList, { lowToHigh = true } = {}) => {
  return [...productList].sort((p1, p2) => {
    const p1Prices = calculateProductPrices(p1)
    const p2Prices = calculateProductPrices(p2)
    if (lowToHigh) {
      return (
        Math.min(p1Prices.minPrice, p1Prices.discountedMinPrice) -
        Math.min(p2Prices.minPrice, p2Prices.discountedMinPrice)
      )
    }
    return (
      Math.min(p2Prices.maxPrice, p2Prices.discountedMaxPrice) -
      Math.min(p1Prices.maxPrice, p1Prices.discountedMaxPrice)
    )
  })
}

const getSortedProducts = (productList, sortByValue) => {
  if (sortByValue === SORT_BY_VALUES.mostPopular) {
    return getSortedProductsByNumReviews(productList, reviews)
  }
  if (sortByValue === SORT_BY_VALUES.newest) {
    return getSortedProductsByUploadTime(productList)
  }
  if (sortByValue === SORT_BY_VALUES.bestSelling) {
    return getSortedProductsByBestSelling(productList, orders)
  }
  if (sortByValue === SORT_BY_VALUES.priceLowToHigh) {
    return getSortedProductsByPrice(productList)
  }
  if (sortByValue === SORT_BY_VALUES.priceHighToLow) {
    return getSortedProductsByPrice(productList, { lowToHigh: false })
  }
}

export { getSortedProducts }
