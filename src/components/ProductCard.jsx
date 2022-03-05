const ProductCard = ({ image, name, description, price }) => {
  const displayedPrice =
    price.minPrice < price.maxPrice
      ? `$${price.minPrice}-$${price.maxPrice}`
      : `$${price.minPrice}`

  return (
    <div>
      <img src={image} alt="product" />
      <p>{name}</p>
      <p>{description}</p>
      <p>{displayedPrice}</p>
    </div>
  )
}

export default ProductCard
