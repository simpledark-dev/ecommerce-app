import { products, categories, reviews, orders } from 'pseudoDB'
import { getFilteredProducts } from 'utils/productFilterUtils'
import { getSearchedProducts } from 'utils/productSearchUtils'
import { getSortedProducts } from 'utils/productSortUtils'

const FAKE_DELAY_IN_MS = 250

export const fetchProducts = (
  searchKeyword,
  sortValue,
  categoryFilterList,
  priceRange
) => {
  return new Promise((resolve, reject) => {
    if (!products) {
      setTimeout(
        () => reject(new Error('Error fetching products')),
        FAKE_DELAY_IN_MS
      )
    }
    setTimeout(() => {
      const searchedProducts = getSearchedProducts(products, searchKeyword)
      const filteredProducts = getFilteredProducts(
        searchedProducts,
        categoryFilterList,
        priceRange
      )
      const sortedProductes = getSortedProducts(filteredProducts, sortValue)
      resolve(sortedProductes)
    }, FAKE_DELAY_IN_MS)
  })
}

export const fetchReviews = () => {
  return new Promise((resolve, reject) => {
    if (!reviews) {
      setTimeout(
        () => reject(new Error('Error fetching reviews')),
        FAKE_DELAY_IN_MS
      )
    }
    setTimeout(() => resolve(reviews), FAKE_DELAY_IN_MS)
  })
}

export const fetchCategories = () => {
  return new Promise((resolve, reject) => {
    if (!categories) {
      setTimeout(
        () => reject(new Error('Error fetching categories')),
        FAKE_DELAY_IN_MS
      )
    }
    setTimeout(() => resolve(categories), FAKE_DELAY_IN_MS)
  })
}

export const fetchOrders = () => {
  return new Promise((resolve, reject) => {
    if (!orders) {
      setTimeout(
        () => reject(new Error('Error fetching orders')),
        FAKE_DELAY_IN_MS
      )
    }
    setTimeout(() => resolve(orders), FAKE_DELAY_IN_MS)
  })
}
