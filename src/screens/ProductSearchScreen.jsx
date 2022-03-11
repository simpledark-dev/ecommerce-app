import {
  ProductList,
  SearchBar,
  SortDropdown,
  ProductFilters
} from 'components'

const ProductSearchScreen = () => {
  return (
    <>
      <ProductFilters />
      <SearchBar />
      <SortDropdown />
      <ProductList />
    </>
  )
}

export default ProductSearchScreen
