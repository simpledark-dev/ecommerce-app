import { useState } from 'react'
import { products } from 'data/data'
import { getSearchedProducts } from 'services/productSearchHelpers'
import { getSortedProducts, SORT_BY_VALUES } from 'services/productSortHelpers'

const SearchBar = ({
  setProductSearchList,
  setProductDisplayList,
  setSortValue,
  resetCategoryFilterList
}) => {
  const [searchText, setSearchText] = useState('')

  const handleProductSearch = e => {
    e.preventDefault()

    const searchedProducts = getSearchedProducts(products, searchText)
    setProductSearchList(searchedProducts)

    const defaultSortValue = SORT_BY_VALUES.mostPopular
    const productsToDisplay = getSortedProducts(
      searchedProducts,
      defaultSortValue
    )
    setProductDisplayList(productsToDisplay)
    setSortValue(defaultSortValue)
    resetCategoryFilterList()
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
