import { useState, useEffect } from 'react'
import { products, categories } from 'data/data'
import ProductCard from 'components/ProductCard'
import { getSearchedProducts } from 'services/productSearchHelpers'
import { SORT_BY_VALUES, getSortedProducts } from 'services/productSortHelpers'
import { getFilteredProducts } from 'services/productFilterHelpers'
import { calculateProductPrices } from 'services/productPriceHelpers'

const ProductList = () => {
  const [productSearchList, setProductSearchList] = useState([])
  const [productDisplayList, setProductDisplayList] = useState([])
  const [searchText, setSearchText] = useState('')
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

  useEffect(() => {
    window.history.replaceState(null, null, `?sort=${sortValue}`)
  }, [sortValue])

  useEffect(() => {
    const selectedList = categories.map(category => ({
      ...category,
      selectedValues: []
    }))
    setCategoryFilterList(selectedList)
  }, [])

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

  const handleSortOnChange = e => {
    const currentSortValue = e.target.value
    const productsToDisplay = getSortedProducts(
      productDisplayList,
      currentSortValue
    )
    setProductDisplayList(productsToDisplay)
    setSortValue(currentSortValue)
  }

  const handleFilterOnChange = (categoryId, value) => {
    // Update category filter list
    const currentCategoryFilterList = [...categoryFilterList]
    const categoryFilter = currentCategoryFilterList.find(
      category => category.id === categoryId
    )
    if (categoryFilter.selectedValues.includes(value)) {
      categoryFilter.selectedValues = categoryFilter.selectedValues.filter(
        v => v !== value
      )
    } else categoryFilter.selectedValues.push(value)
    setCategoryFilterList(currentCategoryFilterList)

    // Filter products and update product display list
    const filteredProducts = getFilteredProducts(
      productSearchList,
      currentCategoryFilterList
    )
    const productsToDisplay = getSortedProducts(filteredProducts, sortValue)
    setProductDisplayList(productsToDisplay)
  }

  const handleClearFilter = () => {
    resetCategoryFilterList()
    const productsToDisplay = getSortedProducts(productSearchList, sortValue)
    setProductDisplayList(productsToDisplay)
    setSortValue(sortValue)
  }

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

  const currentCategoryFilterList = categoryFilterList.map(categoryValues => {
    return (
      <div key={categoryValues.id}>
        <h3>{categoryValues.name}</h3>
        {categoryValues.values.map(value => {
          return (
            <label key={value}>
              <input
                type="checkbox"
                name={value}
                value={value}
                checked={categoryValues.selectedValues.includes(value)}
                onChange={() => handleFilterOnChange(categoryValues.id, value)}
              />
              {value}
            </label>
          )
        })}
      </div>
    )
  })

  return (
    <>
      <fieldset>
        <button onClick={handleClearFilter}>Clear all</button>
        {currentCategoryFilterList}
      </fieldset>
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
      <select onChange={handleSortOnChange} value={sortValue}>
        <option value="most-popular">Most popular</option>
        <option value="most-recent">Most recent</option>
        <option value="best-selling">Best selling</option>
        <option value="price-low-to-high">Price Low to High</option>
        <option value="price-high-to-low">Price High to Low</option>
      </select>
      {currentProductDisplayList}
    </>
  )
}

export default ProductList
