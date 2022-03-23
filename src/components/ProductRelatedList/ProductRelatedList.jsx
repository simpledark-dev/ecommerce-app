import { useEffect, useState } from 'react'
import { fetchProducts } from 'api/services'
import { ProductCard } from 'components'
import { calculateProductPrices } from 'utils/productPriceUtils'
import { SORT_BY_VALUES } from 'constants'

const ProductRelatedList = ({ searchKeyword, categoryFilterList }) => {
  const [relatedProducts, setRelatedProducts] = useState([])

  useEffect(() => {
    async function loadProducts() {
      const productList = await fetchProducts(
        '',
        SORT_BY_VALUES.MOST_POPULAR,
        [],
        { min: 0, max: +Infinity }
      )
      setRelatedProducts(productList)
    }
    loadProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const productList = relatedProducts.map(product => {
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
        id={product.id}
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
  return <div style={{ width: 200, display: 'flex' }}>{productList}</div>
}

export default ProductRelatedList