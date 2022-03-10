import { useState, useEffect } from 'react'
import { products, categories } from 'data/data'
import ProductCard from 'components/ProductCard'
import { SORT_BY_VALUES, getSortedProducts } from 'services/productSortHelpers'
import { getFilteredProducts } from 'services/productFilterHelpers'
import { calculateProductPrices } from 'services/productPriceHelpers'

const ProductList = () => {
  const [productSearchList, setProductSearchList] = useState([])
  const [productDisplayList, setProductDisplayList] = useState([])
  const [searchTextInput, setSearchTextInput] = useState('')
  const [selectedSortBy, setSelectedSortBy] = useState('')
  const [categorySelectedList, setCategorySelectedList] = useState([])

  useEffect(() => {
    setProductSearchList(products)
    const sortValueFromUrl = new URLSearchParams(window.location.search).get(
      'sort'
    )
    const isValidSortValue =
      Object.values(SORT_BY_VALUES).includes(sortValueFromUrl)

    const currentSortBy =
      (isValidSortValue && sortValueFromUrl) || SORT_BY_VALUES.mostPopular

    const productsToDisplay = getSortedProducts(products, currentSortBy)
    setSelectedSortBy(currentSortBy)
    setProductDisplayList(productsToDisplay)
  }, [])

  useEffect(() => {
    window.history.replaceState(null, null, `?sort=${selectedSortBy}`)
  }, [selectedSortBy])

  useEffect(() => {
    const selectedList = categories.map(category => ({
      ...category,
      selectedValues: []
    }))
    setCategorySelectedList(selectedList)
  }, [])

  const handleProductSearch = e => {
    e.preventDefault()
    const searchedProducts = [...products].filter(product =>
      product.name.toLowerCase().includes(searchTextInput.toLowerCase())
    )
    setProductSearchList(searchedProducts)
    const defaultSortByValue = SORT_BY_VALUES.mostPopular
    const productsToDisplay = getSortedProducts(
      searchedProducts,
      defaultSortByValue
    )
    setSelectedSortBy(defaultSortByValue)
    setProductDisplayList(productsToDisplay)
    clearFilter()
  }

  const handleSortByOnChange = e => {
    const productsToDisplay = getSortedProducts(
      productDisplayList,
      e.target.value
    )
    setSelectedSortBy(e.target.value)
    setProductDisplayList(productsToDisplay)
  }

  const handleFilterOnChange = (categoryId, value) => {
    const updatedCategorySelectedList = [...categorySelectedList]
    const currentCategory = updatedCategorySelectedList.find(
      category => category.id === categoryId
    )
    if (currentCategory.selectedValues.includes(value)) {
      currentCategory.selectedValues = currentCategory.selectedValues.filter(
        v => v !== value
      )
    } else currentCategory.selectedValues.push(value)
    setCategorySelectedList(updatedCategorySelectedList)

    const filteredProducts = getFilteredProducts(
      productSearchList,
      updatedCategorySelectedList
    )
    const productsToDisplay = getSortedProducts(
      filteredProducts,
      selectedSortBy
    )
    setProductDisplayList(productsToDisplay)
  }

  const clearFilter = () => {
    const updatedCategorySelectedList = [...categorySelectedList]
    updatedCategorySelectedList.forEach(
      category => (category.selectedValues.length = 0)
    )
    setCategorySelectedList(updatedCategorySelectedList)
  }

  const displayedProducts = productDisplayList.map(product => {
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

  const categoryFilterList = categorySelectedList.map(categoryValues => {
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
        <button
          onClick={() => {
            clearFilter()
            const productsToDisplay = getSortedProducts(
              productSearchList,
              selectedSortBy
            )
            setProductDisplayList(productsToDisplay)
            setSelectedSortBy(selectedSortBy)
          }}
        >
          Clear all
        </button>
        {categoryFilterList}
      </fieldset>
      <form onSubmit={handleProductSearch}>
        <p>
          <input
            type="search"
            placeholder="Search your product here"
            value={searchTextInput}
            onChange={e => setSearchTextInput(e.target.value)}
          />
          <button onSubmit={handleProductSearch}>Search</button>
        </p>
      </form>
      <select onChange={handleSortByOnChange} value={selectedSortBy}>
        <option value="most-popular">Most popular</option>
        <option value="most-recent">Most recent</option>
        <option value="best-selling">Best selling</option>
        <option value="price-low-to-high">Price Low to High</option>
        <option value="price-high-to-low">Price High to Low</option>
      </select>
      {displayedProducts}
    </>
  )
}

export default ProductList
