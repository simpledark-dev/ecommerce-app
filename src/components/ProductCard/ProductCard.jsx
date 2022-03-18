import { useNavigate } from 'react-router-dom'

const ProductCard = ({ id, image, name, description, price }) => {
  let navigate = useNavigate()
  const {
    minPrice,
    maxPrice,
    discount,
    discountedMinPrice,
    discountedMaxPrice
  } = price

  const visitProduct = () => {
    navigate(`/product/${id}`)
  }

  const displayedPrice =
    minPrice < maxPrice ? `$${minPrice} - $${maxPrice}` : `$${minPrice}`

  const displayedDiscountedPrice =
    discountedMinPrice < discountedMaxPrice
      ? `$${discountedMinPrice.toFixed(2)} - $${discountedMaxPrice.toFixed(2)}`
      : `$${discountedMinPrice.toFixed(2)}`

  return (
    <div onClick={visitProduct}>
      <img style={{ width: 200, height: 200 }} src={image} alt="product" />
      <p>{name}</p>
      <p>{description}</p>
      {discount > 0 ? (
        <>
          <p>-{Math.round((discount * 100).toFixed(2))}%</p>
          <p>
            {displayedDiscountedPrice} (Old price: {displayedPrice})
          </p>
        </>
      ) : (
        <p>{displayedPrice}</p>
      )}
    </div>
  )
}

export default ProductCard
