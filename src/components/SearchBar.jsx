import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getSearchedProducts } from 'services/productSearchHelpers'
import { getSortedProducts, SORT_BY_VALUES } from 'services/productSortHelpers'
import {
  setProductSearchList,
  setProductDisplayList
} from 'redux/slices/productSlice'
import { clearAllFilter } from 'redux/slices/productFilterSlice'
import { setSortValue } from 'redux/slices/productSortSlice'

const SearchBar = () => {
  const [searchText, setSearchText] = useState('')
  const { products } = useSelector(state => state.product)

  const dispatch = useDispatch()

  const handleProductSearch = e => {
    e.preventDefault()

    const searchedProducts = getSearchedProducts(products, searchText)
    dispatch(setProductSearchList(searchedProducts))

    const defaultSortValue = SORT_BY_VALUES.mostPopular
    const productsToDisplay = getSortedProducts(
      searchedProducts,
      defaultSortValue
    )
    dispatch(setProductDisplayList(productsToDisplay))
    dispatch(setSortValue(defaultSortValue))
    dispatch(clearAllFilter())
  }

  return (
    <form onSubmit={handleProductSearch}>
      <p>
        <input
          type="search"
          placeholder="Search your product here"
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
        />
        <button onSubmit={handleProductSearch}>Search</button>
      </p>
    </form>
  )
}

export default SearchBar
