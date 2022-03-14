import {
  ProductList,
  SearchBar,
  SortDropdown,
  ProductFilters
} from 'components'

const ProductSearchPage = () => {
  return (
    <>
      <ProductFilters />
      <SearchBar />
      <SortDropdown />
      <ProductList />
    </>
  )
}

export default ProductSearchPage
