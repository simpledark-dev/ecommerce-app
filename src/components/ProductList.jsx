import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ProductCard } from 'components'
import {
  setProductDisplayList,
  setProductSearchList
} from 'redux/slices/productSlice'
import { calculateProductPrices } from 'services/productPriceHelpers'
import { getSortedProducts } from 'services/productSortHelpers'

const ProductList = () => {
  const { products, productDisplayList } = useSelector(state => state.product)
  const { sortValue } = useSelector(state => state.productSort)

  const dispatch = useDispatch()

  useEffect(() => {
    const productsToDisplay = getSortedProducts(products, sortValue)
    dispatch(setProductSearchList(products))
    dispatch(setProductDisplayList(productsToDisplay))
  }, [dispatch, products, sortValue])

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
