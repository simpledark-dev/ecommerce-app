import { SORT_BY_VALUES } from 'constants'
import { useSelector, useDispatch } from 'react-redux'
import { getProducts } from 'redux/slices/productSlice'
import { setSortValue } from 'redux/slices/searchSortFilterSlice'

const {
  MOST_POPULAR,
  MOST_RECENT,
  BEST_SELLING,
  PRICE_LOW_TO_HIGH,
  PRICE_HIGH_TO_LOW
} = SORT_BY_VALUES

const SortDropdown = () => {
  const { searchKeyword, sortValue, categoryFilterList, priceRange } =
    useSelector(state => state.searchSortFilterSlice)

  const dispatch = useDispatch()

  const handleSortOnChange = async e => {
    const currentSortValue = e.target.value
    dispatch(setSortValue(currentSortValue))
    dispatch(
      getProducts({
        searchKeyword,
        sortValue: currentSortValue,
        categoryFilterList,
        priceRange
      })
    )
  }

  return (
    <select onChange={handleSortOnChange} value={sortValue}>
      <option value={MOST_POPULAR}>Most popular</option>
      <option value={MOST_RECENT}>Most recent</option>
      <option value={BEST_SELLING}>Best selling</option>
      <option value={PRICE_LOW_TO_HIGH}>Price Low to High</option>
      <option value={PRICE_HIGH_TO_LOW}>Price High to Low</option>
    </select>
  )
}

export default SortDropdown
