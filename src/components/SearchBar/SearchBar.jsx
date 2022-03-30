import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SORT_BY_VALUES } from 'constants'
import { getProducts } from 'redux/slices/productSlice'
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

    dispatch(setSortValue(SORT_BY_VALUES.MOST_POPULAR))
    dispatch(clearFilters())

    dispatch(
      getProducts({
        searchKeyword: inputSearchText,
        sortValue: SORT_BY_VALUES.MOST_POPULAR,
        categoryFilterList: filtersInitialState.categoryFilterList,
        priceRange: filtersInitialState.priceRange
      })
    )
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
