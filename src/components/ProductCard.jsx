const ProductCard = ({ image, name, description, price }) => {
  return (
    <div>
      <img src={image} alt="product" />
      <p>{name}</p>
      <p>{description}</p>
      <p>${price}</p>
    </div>
  )
}

export default ProductCard
