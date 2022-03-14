import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchProducts } from 'api/services'
import { SORT_BY_VALUES } from 'constants'
import { setProducts } from 'redux/slices/productSlice'
import {
  setSearchKeyword,
  setSortValue,
  filtersInitialState,
  clearAllFilter
} from 'redux/slices/productFilterSlice'

const SearchBar = () => {
  const [inputSearchText, setSearchText] = useState('')

  const dispatch = useDispatch()

  const handleProductSearch = async e => {
    e.preventDefault()

    dispatch(setSearchKeyword(inputSearchText))
    dispatch(setSortValue(SORT_BY_VALUES.mostPopular))
    dispatch(clearAllFilter())

    const productList = await fetchProducts(
      inputSearchText,
      SORT_BY_VALUES.mostPopular,
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
