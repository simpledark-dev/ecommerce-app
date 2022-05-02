import {
  processSignUp,
  processLogin,
  processFetchProductList,
  processFetchOneProduct,
  processFetchProductReviews,
  processUpdateUserCart,
  processFetchUserCart,
  processUpdateUserOrders
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

export const fetchProducts = ({
  searchKeyword,
  sortValue,
  categoryFilterList,
  priceRange
}) => {
  return new Promise((resolve, reject) => {
    const productList = processFetchProductList(
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

export const fetchOneProduct = ({ productId }) => {
  return new Promise((resolve, reject) => {
    const foundProduct = processFetchOneProduct(productId)
    if (!foundProduct) {
      setTimeout(
        () => reject(new Error('Error fetching product!')),
        FAKE_DELAY_IN_MS
      )
    }
    setTimeout(() => resolve(foundProduct), FAKE_DELAY_IN_MS)
  })
}

export const fetchProductReviews = ({ productId, sortFilterValue }) => {
  return new Promise((resolve, reject) => {
    const productReviews = processFetchProductReviews(
      productId,
      sortFilterValue
    )
    if (!productReviews) {
      setTimeout(() => reject(new Error('Error fetching reviews!')))
    }
    setTimeout(() => resolve(productReviews), FAKE_DELAY_IN_MS)
  })
}

export const updateUserCart = ({ userId, productToAddToCart }) => {
  return new Promise((resolve, reject) => {
    const updateUserCartSuccess = processUpdateUserCart(
      userId,
      productToAddToCart
    )
    if (!updateUserCartSuccess) {
      setTimeout(() => reject(new Error('Error update user cart!')))
    }
    setTimeout(() => resolve(), FAKE_DELAY_IN_MS)
  })
}

export const fetchUserCart = ({ userId }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userCart = processFetchUserCart(userId)
      if (!userCart) {
        setTimeout(
          () => reject(new Error('Error fetching user cart')),
          FAKE_DELAY_IN_MS
        )
      }
      setTimeout(() => resolve(userCart), FAKE_DELAY_IN_MS)
    }, FAKE_DELAY_IN_MS)
  })
}

export const updateUserOrders = ({ userId, orderedProducts, shippingInfo }) => {
  return new Promise((resolve, reject) => {
    const updateUserOrdersSuccess = processUpdateUserOrders(
      userId,
      orderedProducts,
      shippingInfo
    )
    if (!updateUserOrdersSuccess) {
      setTimeout(() => reject(new Error('Error update user orders!')))
    }
    setTimeout(() => resolve(), FAKE_DELAY_IN_MS)
  })
}
