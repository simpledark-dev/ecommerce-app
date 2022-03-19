import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchOneProduct, fetchProductReviews } from 'api/services'
import { getDisplayJoinedTime } from 'utils/dateUtils'

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
            sortFilterValue === 'most-recent' ? { background: 'yellow' } : {}
          }
          onClick={() => setSortFilterValue('most-recent')}
        >
          Most recent
        </button>
        <button
          style={
            sortFilterValue === 'most-upvoted' ? { background: 'yellow' } : {}
          }
          onClick={() => setSortFilterValue('most-upvoted')}
        >
          Most upvoted
        </button>
        <button
          style={sortFilterValue === '5-stars' ? { background: 'yellow' } : {}}
          onClick={() => setSortFilterValue('5-stars')}
        >
          5 stars
        </button>
        <button
          style={sortFilterValue === '4-stars' ? { background: 'yellow' } : {}}
          onClick={() => setSortFilterValue('4-stars')}
        >
          4 stars
        </button>
        <button
          style={sortFilterValue === '3-stars' ? { background: 'yellow' } : {}}
          onClick={() => setSortFilterValue('3-stars')}
        >
          3 stars
        </button>
        <button
          style={sortFilterValue === '2-stars' ? { background: 'yellow' } : {}}
          onClick={() => setSortFilterValue('2-stars')}
        >
          2 stars
        </button>
        <button
          style={sortFilterValue === '1-star' ? { background: 'yellow' } : {}}
          onClick={() => setSortFilterValue('1-star')}
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
            <p> Received {review.numUpvotes} likes</p>
          </div>
        ))}
      </div>
      <p> Pagination: (todo) </p>
    </div>
  )
}

export default ProductPage
