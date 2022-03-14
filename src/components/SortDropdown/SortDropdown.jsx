import { fetchProducts } from 'api/services'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setProducts } from 'redux/slices/productSlice'
import { setSortValue } from 'redux/slices/productFilterSlice'

const SortDropdown = () => {
  const { searchKeyword, sortValue, categoryFilterList, priceRange } =
    useSelector(state => state.productFilters)
  const dispatch = useDispatch()

  useEffect(() => {
    window.history.replaceState(null, null, `?sort=${sortValue}`)
  }, [sortValue])

  const handleSortOnChange = async e => {
    const currentSortValue = e.target.value
    dispatch(setSortValue(currentSortValue))

    const productList = await fetchProducts(
      searchKeyword,
      currentSortValue,
      categoryFilterList,
      priceRange
    )
    dispatch(setProducts(productList))
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
