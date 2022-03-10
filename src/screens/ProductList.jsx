import { useState, useEffect } from 'react'
import { products } from 'data/data'
import ProductCard from 'components/ProductCard'
import { SORT_BY_VALUES, getSortedProducts } from 'services/productSortHelpers'
import { calculateProductPrices } from 'services/productPriceHelpers'
import SearchBar from 'components/SearchBar'
import SortDropdown from 'components/SortDropdown'
import ProductFilters from 'components/ProductFilters'

const ProductList = () => {
  const [productSearchList, setProductSearchList] = useState([])
  const [productDisplayList, setProductDisplayList] = useState([])
  const [sortValue, setSortValue] = useState('')
  const [categoryFilterList, setCategoryFilterList] = useState([])

  useEffect(() => {
    setProductSearchList(products)
    const sortValueFromUrl = new URLSearchParams(window.location.search).get(
      'sort'
    )
    const isValidSortValue =
      Object.values(SORT_BY_VALUES).includes(sortValueFromUrl)

    const currentSortValue =
      (isValidSortValue && sortValueFromUrl) || SORT_BY_VALUES.mostPopular

    const productsToDisplay = getSortedProducts(products, currentSortValue)
    setProductDisplayList(productsToDisplay)
    setSortValue(currentSortValue)
  }, [])

  const resetCategoryFilterList = () => {
    const currentCategoryFilterList = [...categoryFilterList]
    currentCategoryFilterList.forEach(
      categoryFilter => (categoryFilter.selectedValues.length = 0)
    )
    setCategoryFilterList(currentCategoryFilterList)
  }

  const currentProductDisplayList = productDisplayList.map(product => {
    const {
      minPrice,
      maxPrice,
      discount,
      discountedMinPrice,
      discountedMaxPrice
    } = calculateProductPrices(product)

    return (
      <ProductCard
        key={product.id}
        image={product.images[0]}
        name={product.name}
        price={{
          minPrice,
          maxPrice,
          discountedMinPrice,
          discountedMaxPrice,
          discount
        }}
      />
    )
  })

  return (
    <>
      <ProductFilters
        categoryFilterList={categoryFilterList}
        setCategoryFilterList={setCategoryFilterList}
        productSearchList={productSearchList}
        setProductDisplayList={setProductDisplayList}
        sortValue={sortValue}
        resetCategoryFilterList={resetCategoryFilterList}
      />
      <SearchBar
        setProductSearchList={setProductSearchList}
        setProductDisplayList={setProductDisplayList}
        setSortValue={setSortValue}
        resetCategoryFilterList={resetCategoryFilterList}
      />
      <SortDropdown
        productDisplayList={productDisplayList}
        setProductDisplayList={setProductDisplayList}
        sortValue={sortValue}
        setSortValue={setSortValue}
      />
      {currentProductDisplayList}
    </>
  )
}

export default ProductList
