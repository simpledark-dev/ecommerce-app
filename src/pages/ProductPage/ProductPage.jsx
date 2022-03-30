import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { fetchOneProduct, fetchProductReviews } from 'api/services'
import { getDisplayJoinedTime } from 'utils/dateUtils'
import { REVIEW_SORT_FILTER_VALUES } from 'constants'
import { calculateProductPrices } from 'utils/productPriceUtils'
import { areArraysOfObjectsEqual } from 'utils/commonUtils'
import { ProductRelatedList } from 'components'
import { PATH } from 'constants'

const {
  MOST_RECENT,
  MOST_UPVOTED,
  FIVE_STARS,
  FOUR_STARS,
  THREE_STARS,
  TWO_STARS,
  ONE_STAR
} = REVIEW_SORT_FILTER_VALUES

const ProductPage = () => {
  const { pathname } = useLocation()

  const [product, setProduct] = useState(null)
  const [variationSelection, setVariationSelection] = useState([])
  const [reviews, setReviews] = useState([])
  const [sortFilterValue, setSortFilterValue] = useState(MOST_UPVOTED)
  const { currentUser } = useSelector(state => state.currentUser)
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    const fetchProduct = async id => {
      const fetchedProduct = await fetchOneProduct(id)
      setProduct(fetchedProduct)
    }
    fetchProduct(id)
  }, [id])

  useEffect(() => {
    if (
      variationSelection.length >=
      product?.variations?.variation_key_values_list.length
    )
      return

    product?.variations?.variation_key_values_list.forEach(
      variationKeyValues => {
        setVariationSelection(variationSelection => [
          ...variationSelection,
          {
            key: variationKeyValues.key,
            value: variationKeyValues.values[0]
          }
        ])
      }
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product])

  useEffect(() => {
    const fetchReviews = async id => {
      const fetchedReviews = await fetchProductReviews(id, sortFilterValue)
      setReviews(fetchedReviews)
    }
    fetchReviews(id)
  }, [id, sortFilterValue])

  if (!product) return 'Loading...'

  const handleAddToCart = () => {
    if (!currentUser)
      return navigate(PATH.LOGIN, { state: { previousPath: pathname } })
  }

  const isVariationValueSelected = (key, value) => {
    return variationSelection.find(
      variation => variation.key === key && variation.value === value
    )
  }

  const selectVariationValue = (key, value) => {
    const newVariationSelection = variationSelection.map(variation => {
      if (variation.key === key) {
        return {
          ...variation,
          value
        }
      }
      return variation
    })
    setVariationSelection(newVariationSelection)
  }

  const currentProductSelectedVariations = (() => {
    if (!product.variations) return null
    return product?.variations?.variations_selection_info.find(
      currentVariationSelection =>
        areArraysOfObjectsEqual(
          currentVariationSelection.selections,
          variationSelection
        )
    )
  })()

  const overallRating = (
    product.reviews.reduce((accRating, curr) => accRating + curr.rating, 0) /
    (product.reviews.length || 1)
  ).toFixed(1)

  const ratingStats = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }
  product.reviews.forEach(review => {
    ratingStats[Math.round(review.rating)] += 1
  })

  const { discount, discountedMinPrice } = calculateProductPrices(product)

  const displayedNoVariationPrice = (() => {
    if (product.variations) return ''
    return discount ? (
      <p>
        {`$${discountedMinPrice.toFixed(2)}`} (
        {Math.round((discount * 100).toFixed(2))}% off) (Old: $
        {product.price_in_USD.toFixed(2)})
      </p>
    ) : (
      <p>${product?.price_in_USD?.toFixed(2)}</p>
    )
  })()

  const displayedWithVariationPrice = (() => {
    if (!product.variations) return ''

    const variationPrice = currentProductSelectedVariations?.price_in_USD
    if (!variationPrice) return ''

    return discount
      ? `$${(variationPrice * (1 - discount)).toFixed(2)} (${Math.round(
          (discount * 100).toFixed(2)
        )}% off) (Old price: $${variationPrice})`
      : `$${variationPrice.toFixed(2)}`
  })()

  const displayedVariationSelections = (() => {
    if (!product.variations) return ''
    return product?.variations?.variation_key_values_list.map(
      (variationKeyValues, idx) => (
        <p key={idx}>
          <span> {variationKeyValues.key}: </span>
          {variationKeyValues.values.map((value, idx) => (
            <button
              key={idx}
              style={
                isVariationValueSelected(variationKeyValues.key, value)
                  ? { background: 'greenyellow' }
                  : {}
              }
              onClick={() =>
                selectVariationValue(variationKeyValues.key, value)
              }
            >
              {value}
            </button>
          ))}
        </p>
      )
    )
  })()

  return (
    <div>
      <div>
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
      <br />
      {product.images.map(image => (
        <img
          key={image}
          style={{ width: 200, height: 200 }}
          src={image}
          alt="product"
        />
      ))}
      <h3>{product.name}</h3>
      <p>
        {overallRating} stars ({product.reviews.length} reviews) (
        {product.numFulfilledOrders} sold)
      </p>
      <div>
        {product.price_in_USD
          ? displayedNoVariationPrice
          : displayedWithVariationPrice}
      </div>

      <div>{displayedVariationSelections}</div>
      <div>
        Quantity: <button>-</button> 5 <button>+</button>
      </div>
      <p>
        <button onClick={handleAddToCart}>Add to Cart</button>{' '}
        <button>Buy Now </button> (
        {product.variations
          ? currentProductSelectedVariations &&
            currentProductSelectedVariations.in_stock
          : product.in_stock}{' '}
        available)
      </p>
      <p>
        Categories:{' '}
        {product.categories.map(category =>
          category.values.map(value => <button key={value}>{value}</button>)
        )}
      </p>
      <h1> Related items </h1>
      <p> (todo: need to search by categories (except self)) </p>
      <ProductRelatedList />
      <hr />
      <h1>Product Details</h1>
      <p>{product.description}</p>
      <hr />
      <h1> Reviews </h1>
      <p> Overall: {overallRating} out of 5</p>
      <p>{product.reviews.length} ratings in total</p>
      <ul style={{ padding: 0 }}>
        <li> 5 stars: {ratingStats[5]}</li>
        <li> 4 stars: {ratingStats[4]}</li>
        <li> 3 stars: {ratingStats[3]}</li>
        <li> 2 stars: {ratingStats[2]}</li>
        <li> 1 stars: {ratingStats[1]}</li>
      </ul>
      <p>
        {' '}
        Sort/filter reviews by:{' '}
        <button
          style={
            sortFilterValue === MOST_RECENT ? { background: 'orange' } : {}
          }
          onClick={() => setSortFilterValue(MOST_RECENT)}
        >
          Most recent
        </button>
        <button
          style={
            sortFilterValue === MOST_UPVOTED ? { background: 'orange' } : {}
          }
          onClick={() => setSortFilterValue(MOST_UPVOTED)}
        >
          Most upvoted
        </button>
        <button
          style={sortFilterValue === FIVE_STARS ? { background: 'orange' } : {}}
          onClick={() => setSortFilterValue(FIVE_STARS)}
        >
          5 stars
        </button>
        <button
          style={sortFilterValue === FOUR_STARS ? { background: 'orange' } : {}}
          onClick={() => setSortFilterValue(FOUR_STARS)}
        >
          4 stars
        </button>
        <button
          style={
            sortFilterValue === THREE_STARS ? { background: 'orange' } : {}
          }
          onClick={() => setSortFilterValue(THREE_STARS)}
        >
          3 stars
        </button>
        <button
          style={sortFilterValue === TWO_STARS ? { background: 'orange' } : {}}
          onClick={() => setSortFilterValue(TWO_STARS)}
        >
          2 stars
        </button>
        <button
          style={sortFilterValue === ONE_STAR ? { background: 'orange' } : {}}
          onClick={() => setSortFilterValue(ONE_STAR)}
        >
          1 star
        </button>
      </p>
      <div>
        {reviews.map(review => (
          <div key={review.id}>
            <img src={review.reviewUser.profile_pic} alt="review" />
            <h4>
              {review.reviewUser.name} (Joined{' '}
              {getDisplayJoinedTime(
                new Date(review.reviewUser.created_date_time)
              )}
              | This user has given: {review.reviewUser.numReviewsGivenByUser}{' '}
              reviews)
            </h4>
            <p>
              {review.date_time} (Rated {review.rating.toFixed(1)} stars)
            </p>
            <p>
              <i>{review.review || '(No comment)'}</i>{' '}
              <button>👍 Helpful</button>
            </p>
            <p> Received {review.numUpvotes} upvotes</p>
          </div>
        ))}
      </div>
      <p> Pagination: (todo) </p>
    </div>
  )
}

export default ProductPage
