import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setProductDisplayList } from 'redux/slices/productSlice'
import { setSortValue } from 'redux/slices/productSortSlice'
import { getSortedProducts } from 'services/productSortHelpers'

const SortDropdown = () => {
  const { productDisplayList } = useSelector(state => state.product)
  const { sortValue } = useSelector(state => state.productSort)
  const dispatch = useDispatch()

  useEffect(() => {
    window.history.replaceState(null, null, `?sort=${sortValue}`)
  }, [sortValue])

  const handleSortOnChange = e => {
    const currentSortValue = e.target.value
    const productsToDisplay = getSortedProducts(
      productDisplayList,
      currentSortValue
    )
    dispatch(setProductDisplayList(productsToDisplay))
    dispatch(setSortValue(currentSortValue))
  }

  return (
    <select onChange={handleSortOnChange} value={sortValue}>
      <option value="most-popular">Most popular</option>
      <option value="most-recent">Most recent</option>
      <option value="best-selling">Best selling</option>
      <option value="price-low-to-high">Price Low to High</option>
      <option value="price-high-to-low">Price High to Low</option>
    </select>
  )
}

export default SortDropdown
