import { categories, reviews, orders } from 'api/mockDB'
import {
  getProduct,
  getProductList,
  getReviews,
  processLogin,
  processSignUp
} from './mockBackend/logic'

const FAKE_DELAY_IN_MS = 250

export const signUp = ({
  name,
  email,
  password,
  confirmedPassword,
  is_admin,
  delivery_address,
  phone_number
}) => {
  return new Promise((resolve, reject) => {
    try {
      processSignUp(
        name,
        email,
        password,
        confirmedPassword,
        is_admin,
        delivery_address,
        phone_number
      )
      setTimeout(() => resolve(true), FAKE_DELAY_IN_MS)
    } catch (error) {
      setTimeout(() => reject(error), FAKE_DELAY_IN_MS)
    }
  })
}

export const login = ({ email, password }) => {
  return new Promise((resolve, reject) => {
    try {
      const foundUser = processLogin(email, password)
      setTimeout(() => resolve(foundUser), FAKE_DELAY_IN_MS)
    } catch (error) {
      setTimeout(() => reject(error), FAKE_DELAY_IN_MS)
    }
  })
}

export const fetchProducts = (
  searchKeyword,
  sortValue,
  categoryFilterList,
  priceRange
) => {
  return new Promise((resolve, reject) => {
    const productList = getProductList(
      searchKeyword,
      sortValue,
      categoryFilterList,
      priceRange
    )
    if (!productList) {
      setTimeout(
        () => reject(new Error('Error fetching products')),
        FAKE_DELAY_IN_MS
      )
    }
    setTimeout(() => {
      resolve(productList)
    }, FAKE_DELAY_IN_MS)
  })
}

export const fetchOneProduct = productId => {
  return new Promise((resolve, reject) => {
    const foundProduct = getProduct(productId)
    if (!foundProduct) {
      setTimeout(
        () => reject(new Error('Error fetching product!')),
        FAKE_DELAY_IN_MS
      )
    }
    setTimeout(() => resolve(foundProduct), FAKE_DELAY_IN_MS)
  })
}

export const fetchProductReviews = (productId, sortFilterValue) => {
  return new Promise((resolve, reject) => {
    const productReviews = getReviews(productId, sortFilterValue)
    if (!productReviews) {
      setTimeout(() => reject(new Error('Error fetching reviews!')))
    }
    setTimeout(() => resolve(productReviews), FAKE_DELAY_IN_MS)
  })
}

export const fetchAllReviews = () => {
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
