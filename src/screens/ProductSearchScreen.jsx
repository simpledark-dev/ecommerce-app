import { useState, useEffect } from 'react'
import { products } from 'data/data'
import { SORT_BY_VALUES, getSortedProducts } from 'services/productSortHelpers'
import SearchBar from 'components/SearchBar'
import SortDropdown from 'components/SortDropdown'
import ProductFilters from 'components/ProductFilters'
import ProductList from 'components/ProductList'
import {
  getHighestPricedProduct,
  getLowestPricedProduct
} from 'services/productPriceHelpers'

const ProductSearchScreen = () => {
  const [productSearchList, setProductSearchList] = useState([])
  const [productDisplayList, setProductDisplayList] = useState([])
  const [sortValue, setSortValue] = useState('')
  const [categoryFilterList, setCategoryFilterList] = useState([])
  const [priceRange, setPriceRange] = useState({
    min: 0,
    max: 0
  })

  useEffect(() => {
    if (products.length === 0) return
    const lowestPrice = getLowestPricedProduct(products)
    const highestPrice = getHighestPricedProduct(products)
    setPriceRange({
      min: Math.floor(lowestPrice),
      max: Math.ceil(highestPrice)
    })
  }, [])

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

  return (
    <>
      <ProductFilters
        categoryFilterList={categoryFilterList}
        setCategoryFilterList={setCategoryFilterList}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
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
      <ProductList productDisplayList={productDisplayList} />
    </>
  )
}

export default ProductSearchScreen
