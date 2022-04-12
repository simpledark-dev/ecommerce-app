import CryptoJS from 'crypto-js'
import { REVIEW_SORT_FILTER_VALUES } from 'constants'
import {
  orders,
  products,
  reviews,
  carts,
  users,
  reviewUpvotes
} from 'api/mockDB'
import { getFilteredProducts } from 'utils/productFilterUtils'
import { getSearchedProducts } from 'utils/productSearchUtils'
import { getSortedProducts } from 'utils/productSortUtils'
import { DUMMY_HASH_SECRET_KEY } from 'constants'
import { areArraysOfObjectsEqual, generateUniqueId } from 'utils/commonUtils'

/* YOUR BACKEND LOGIC (NODE.JS, DJANGO,...) */
/* BELOW IS MOCK BACKEND LOGIC FOR DEMO PURPOSES */

export const processSignUp = (
  name,
  email,
  password,
  confirmedPassword,
  is_admin,
  delivery_address,
  phone_number
) => {
  if (password !== confirmedPassword) throw new Error('Passwords do not match')

  const existingUsers = JSON.parse(localStorage.getItem('users')) || []

  if (existingUsers.find(user => user.email === email))
    throw new Error('User already exists')

  const dummyHash = CryptoJS.AES.encrypt(
    password,
    DUMMY_HASH_SECRET_KEY
  ).toString()

  existingUsers.push({
    id: `u-${generateUniqueId()}`,
    name,
    email,
    password: dummyHash,
    is_admin: is_admin,
    delivery_address: delivery_address,
    phone_number: phone_number,
    profile_pic: 'https://picsum.photos/id/1074/50/50',
    created_date_time: new Date()
  })

  localStorage.setItem('users', JSON.stringify(existingUsers))
}

export const processLogin = (email, password) => {
  const existingUsers = JSON.parse(localStorage.getItem('users')) || []

  const foundUser = existingUsers.find(user => user.email === email)

  const wrongCredentialsMessage = 'Wrong email or password.'

  if (!foundUser) throw new Error(wrongCredentialsMessage)

  const passwordMatched =
    CryptoJS.AES.decrypt(foundUser.password, DUMMY_HASH_SECRET_KEY).toString(
      CryptoJS.enc.Utf8
    ) === password

  if (!passwordMatched) throw new Error(wrongCredentialsMessage)

  const toSendUser = { ...foundUser }
  delete toSendUser.password

  return toSendUser
}

export const processFetchProductList = (
  searchKeyword,
  sortValue,
  categoryFilterList,
  priceRange
) => {
  const searchedProducts = getSearchedProducts(products, searchKeyword)
  const filteredProducts = getFilteredProducts(
    searchedProducts,
    categoryFilterList,
    priceRange
  )
  const sortedProductes = getSortedProducts(filteredProducts, sortValue)
  return sortedProductes
}

export const processFetchOneProduct = productId => {
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

export const processAddToCart = () => {}

export const processFetchUserCart = userId => {
  const fetchedUserCart =
    carts.find(userCart => userCart.user_id === userId)?.cart || []

  const detailedCart = fetchedUserCart.map(inCartProduct => {
    const product = processFetchOneProduct(inCartProduct.product_id)

    const price =
      (product.variations
        ? product.variations.variations_selection_info.find(
            variationSelection =>
              areArraysOfObjectsEqual(
                variationSelection.selections,
                inCartProduct.selectedVariations
              )
          ).price_in_USD
        : product.price_in_USD) *
      (1 - product.discount)

    return {
      image: product.images[0],
      name: product.name,
      price: price,
      subTotal: price * inCartProduct.quantity,
      ...inCartProduct
    }
  })

  return detailedCart
}

export const processFetchProductReviews = (productId, sortFilterValue) => {
  const productReviews = reviews.filter(
    review => review.product_id === productId
  )

  const detailedProductReviews = productReviews.map(review => {
    const reviewUser = users.find(user => user.id === review.user_id)
    const numReviewsGivenByUser = reviews.filter(
      review => review.user_id === reviewUser.id
    ).length
    const numUpvotes = reviewUpvotes.filter(
      upvote => upvote.review_id === review.id
    ).length
    return {
      ...review,
      reviewUser: { ...reviewUser, numReviewsGivenByUser },
      numUpvotes
    }
  })

  const {
    MOST_RECENT,
    MOST_UPVOTED,
    FIVE_STARS,
    FOUR_STARS,
    THREE_STARS,
    TWO_STARS,
    ONE_STAR
  } = REVIEW_SORT_FILTER_VALUES

  if (sortFilterValue === MOST_RECENT) {
    return [...detailedProductReviews].sort(
      (r1, r2) =>
        new Date(r2.date_time).getTime() - new Date(r1.date_time).getTime()
    )
  }

  if (sortFilterValue === MOST_UPVOTED) {
    return [...detailedProductReviews].sort(
      (r1, r2) => r2.numUpvotes - r1.numUpvotes
    )
  }

  if (sortFilterValue === FIVE_STARS) {
    return detailedProductReviews.filter(
      review => Math.round(review.rating) === 5
    )
  }
  if (sortFilterValue === FOUR_STARS) {
    return detailedProductReviews.filter(
      review => Math.round(review.rating) === 4
    )
  }
  if (sortFilterValue === THREE_STARS) {
    return detailedProductReviews.filter(
      review => Math.round(review.rating) === 3
    )
  }
  if (sortFilterValue === TWO_STARS) {
    return detailedProductReviews.filter(
      review => Math.round(review.rating) === 2
    )
  }
  if (sortFilterValue === ONE_STAR) {
    return detailedProductReviews.filter(
      review => Math.round(review.rating) === 1
    )
  }

  return detailedProductReviews
}
