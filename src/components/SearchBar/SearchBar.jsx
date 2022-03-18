import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from 'api/services'
import { SORT_BY_VALUES } from 'constants'
import { setProducts } from 'redux/slices/productSlice'
import {
  setSearchKeyword,
  setSortValue,
  filtersInitialState,
  clearFilters
} from 'redux/slices/searchSortFilterSlice'

const SearchBar = () => {
  const { searchKeyword } = useSelector(state => state.searchSortFilterSlice)

  const [inputSearchText, setSearchText] = useState(searchKeyword)

  const dispatch = useDispatch()

  const handleProductSearch = async e => {
    e.preventDefault()

    dispatch(setSearchKeyword(inputSearchText))
    dispatch(setSortValue(SORT_BY_VALUES.MOST_POPUPLAR))
    dispatch(clearFilters())

    const productList = await fetchProducts(
      inputSearchText,
      SORT_BY_VALUES.MOST_POPUPLAR,
      filtersInitialState.categoryFilterList,
      filtersInitialState.priceRange
    )

    dispatch(setProducts(productList))
  }

  return (
    <form onSubmit={handleProductSearch}>
      <p>
        <input
          type="search"
          placeholder="Search your product here"
          value={inputSearchText}
          onChange={e => setSearchText(e.target.value)}
        />
        <button onSubmit={handleProductSearch}>Search</button>
      </p>
    </form>
  )
}

export default SearchBar
