import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ProductCard } from 'components'
import { getProducts } from 'redux/slices/productSlice'
import { calculateProductPrices } from 'utils/productPriceUtils'

const ProductList = () => {
  const { products } = useSelector(state => state.product)
  const { searchKeyword, sortValue, categoryFilterList, priceRange } =
    useSelector(state => state.searchSortFilterSlice)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(
      getProducts({
        searchKeyword,
        sortValue,
        categoryFilterList,
        priceRange
      })
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const productList = products.map(product => {
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
  return <div style={{ width: 200, margin: '0 auto' }}>{productList}</div>
}

export default ProductList
