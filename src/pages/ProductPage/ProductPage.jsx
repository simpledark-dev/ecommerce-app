import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchOneProduct } from 'api/services'

const ProductPage = () => {
  const [product, setProduct] = useState(null)
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    const fetchProduct = async () => {
      const fetchedProduct = await fetchOneProduct(id)
      setProduct(fetchedProduct)
    }

    fetchProduct(id)
  }, [id])

  if (!product) return 'Loading...'

  return (
    <div>
      <button onClick={() => navigate(-1)}>Back</button>
      <h2>ProductPage</h2>
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
        {(
          product.reviews.reduce(
            (accRating, curr) => accRating + curr.rating,
            0
          ) / (product.reviews.length || 1)
        ).toFixed(1)}{' '}
        stars ({product.reviews.length} reviews) ({product.numFulfilledOrders}{' '}
        sold)
      </p>
      <p>{product.inStock} available</p>
      <p>
        Categories:{' '}
        {product.categories.map(category =>
          category.values.map(value => <button key={value}>{value}</button>)
        )}
      </p>
      <h3>Details</h3>
      <p>{product.description}</p>
    </div>
  )
}

export default ProductPage
