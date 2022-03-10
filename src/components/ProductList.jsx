import { calculateProductPrices } from 'services/productPriceHelpers'
import ProductCard from './ProductCard'

const ProductList = ({ productDisplayList }) => {
  const currentProductDisplayList = productDisplayList.map(product => {
    const {
      minPrice,
      maxPrice,
      discount,
      discountedMinPrice,
      discountedMaxPrice
    } = calculateProductPrices(product)

    return (
      <ProductCard
        key={product.id}
        image={product.images[0]}
        name={product.name}
        price={{
          minPrice,
          maxPrice,
          discountedMinPrice,
          discountedMaxPrice,
          discount
        }}
      />
    )
  })
  return <div>{currentProductDisplayList}</div>
}

export default ProductList
