import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setProductDisplayList } from 'redux/slices/productSlice'
import {
  updateCategoryFilterList,
  clearAllFilter,
  setPriceRange
} from 'redux/slices/productFilterSlice'
import { getFilteredProducts } from 'utils/productFilterUtils'
import { getSortedProducts } from 'utils/productSortUtils'
import {
  getHighestPricedProduct,
  getLowestPricedProduct
} from 'utils/productPriceUtils'

const ProductFilters = () => {
  const { products, productSearchList } = useSelector(state => state.product)
  const { sortValue } = useSelector(state => state.productSort)
  const { categoryFilterList, priceRange } = useSelector(
    state => state.productFilters
  )

  const dispatch = useDispatch()

  useEffect(() => {
    if (products.length === 0) return
    const lowestPrice = getLowestPricedProduct(products)
    const highestPrice = getHighestPricedProduct(products)
    dispatch(
      setPriceRange({
        min: Math.floor(lowestPrice),
        max: Math.ceil(highestPrice)
      })
    )
  }, [dispatch, products])

  useEffect(() => {
    filterProducts(productSearchList, categoryFilterList, priceRange)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryFilterList])

  const filterProducts = (productList, categoryFilterList, priceRange) => {
    const filteredProducts = getFilteredProducts(
      productList,
      categoryFilterList,
      priceRange
    )
    const productsToDisplay = getSortedProducts(filteredProducts, sortValue)
    dispatch(setProductDisplayList(productsToDisplay))
  }

  const handleFilterOnChange = (categoryId, value) => {
    dispatch(updateCategoryFilterList({ categoryId, categoryValue: value }))
  }

  const handleClearFilter = () => {
    dispatch(clearAllFilter())
    const productsToDisplay = getSortedProducts(productSearchList, sortValue)
    dispatch(setProductDisplayList(productsToDisplay))
  }

  const currentCategoryFilterList = categoryFilterList.map(categoryValues => {
    return (
      <div key={categoryValues.id}>
        <h3>{categoryValues.name}</h3>
        {categoryValues.values.map(value => {
          return (
            <label key={value}>
              <input
                type="checkbox"
                name={value}
                value={value}
                checked={categoryValues.selectedValues.includes(value)}
                onChange={() => handleFilterOnChange(categoryValues.id, value)}
              />
              {value}
            </label>
          )
        })}
      </div>
    )
  })

  return (
    <fieldset>
      <button onClick={handleClearFilter}>Clear all</button>
      {currentCategoryFilterList}
      <h3>Price Range</h3>
      <label>
        Min: $
        <input
          type="number"
          name="min"
          min="0"
          style={{ width: 80 }}
          value={priceRange.min.toString()}
          onChange={e =>
            dispatch(setPriceRange({ ...priceRange, min: +e.target.value }))
          }
        />
      </label>{' '}
      <label>
        Max: $
        <input
          type="number"
          name="max"
          style={{ width: 80 }}
          value={priceRange.max === +Infinity ? '' : priceRange.max.toString()}
          onChange={e =>
            dispatch(setPriceRange({ ...priceRange, max: +e.target.value }))
          }
        />
      </label>{' '}
      <button
        onClick={() =>
          filterProducts(productSearchList, categoryFilterList, priceRange)
        }
      >
        Apply
      </button>
    </fieldset>
  )
}

export default ProductFilters
