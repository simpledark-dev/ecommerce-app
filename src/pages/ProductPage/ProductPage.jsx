import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchOneProduct, fetchProductReviews } from 'api/services'
import { getDisplayJoinedTime } from 'utils/dateUtils'
import { REVIEW_SORT_FILTER_VALUES } from 'constants'

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
  const [product, setProduct] = useState(null)
  const [reviews, setReviews] = useState([])
  const [sortFilterValue, setSortFilterValue] = useState('most-upvoted')
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    const fetchProduct = async id => {
      const fetchedProduct = await fetchOneProduct(id)
      setProduct(fetchedProduct)
    }

    fetchProduct(id)

    const fetchReviews = async id => {
      const fetchedReviews = await fetchProductReviews(id, sortFilterValue)
      setReviews(fetchedReviews)
    }
    fetchReviews(id)
  }, [id, sortFilterValue])

  if (!product) return 'Loading...'

  const overallRating = (
    product.reviews.reduce((accRating, curr) => accRating + curr.rating, 0) /
    (product.reviews.length || 1)
  ).toFixed(1)

  const ratingStats = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }
  product.reviews.forEach(review => {
    ratingStats[Math.round(review.rating)] += 1
  })

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
      <p>{product.name}</p>
      <p>
        {overallRating} stars ({product.reviews.length} reviews) (
        {product.numFulfilledOrders} sold)
      </p>
      <div>
        Quantity: <button>-</button> 5<button>+</button>
      </div>
      <p>
        <button>Add to Cart</button> ({product.inStock} available)
      </p>
      <div>
        <button>Buy Now </button>
      </div>
      <p>
        Categories:{' '}
        {product.categories.map(category =>
          category.values.map(value => <button key={value}>{value}</button>)
        )}
      </p>
      <h1> Related items </h1>
      <p> (todo) </p>
      <hr />
      <h1>Details</h1>
      <p>{product.description}</p>
      <hr />
      <h1> Reviews </h1>
      <p> Review summary: </p>
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
            sortFilterValue === MOST_RECENT ? { background: 'yellow' } : {}
          }
          onClick={() => setSortFilterValue(MOST_RECENT)}
        >
          Most recent
        </button>
        <button
          style={
            sortFilterValue === MOST_UPVOTED ? { background: 'yellow' } : {}
          }
          onClick={() => setSortFilterValue(MOST_UPVOTED)}
        >
          Most upvoted
        </button>
        <button
          style={sortFilterValue === FIVE_STARS ? { background: 'yellow' } : {}}
          onClick={() => setSortFilterValue(FIVE_STARS)}
        >
          5 stars
        </button>
        <button
          style={sortFilterValue === FOUR_STARS ? { background: 'yellow' } : {}}
          onClick={() => setSortFilterValue(FOUR_STARS)}
        >
          4 stars
        </button>
        <button
          style={
            sortFilterValue === THREE_STARS ? { background: 'yellow' } : {}
          }
          onClick={() => setSortFilterValue(THREE_STARS)}
        >
          3 stars
        </button>
        <button
          style={sortFilterValue === TWO_STARS ? { background: 'yellow' } : {}}
          onClick={() => setSortFilterValue(TWO_STARS)}
        >
          2 stars
        </button>
        <button
          style={sortFilterValue === ONE_STAR ? { background: 'yellow' } : {}}
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
