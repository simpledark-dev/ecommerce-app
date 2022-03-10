import { categories } from 'data/data'
import { useEffect } from 'react'
import { getFilteredProducts } from 'services/productFilterHelpers'
import { getSortedProducts } from 'services/productSortHelpers'

const ProductFilters = ({
  categoryFilterList,
  setCategoryFilterList,
  priceRange,
  setPriceRange,
  productSearchList,
  setProductDisplayList,
  sortValue,
  resetCategoryFilterList
}) => {
  useEffect(() => {
    const selectedList = categories.map(category => ({
      ...category,
      selectedValues: []
    }))
    setCategoryFilterList(selectedList)
  }, [setCategoryFilterList])

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

    filterProducts(productSearchList, currentCategoryFilterList, priceRange)
  }

  const filterProducts = (productList, categoryFilterList, priceRange) => {
    // Filter products and update product display list
    const filteredProducts = getFilteredProducts(
      productList,
      categoryFilterList,
      priceRange
    )
    const productsToDisplay = getSortedProducts(filteredProducts, sortValue)
    setProductDisplayList(productsToDisplay)
  }

  const handleClearFilter = () => {
    resetCategoryFilterList()
    const productsToDisplay = getSortedProducts(productSearchList, sortValue)
    setProductDisplayList(productsToDisplay)
  }

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
    <fieldset>
      <button onClick={handleClearFilter}>Clear all</button>
      {currentCategoryFilterList}
      <h3>Price Range</h3>
      <label>
        Min: $
        <input
          type="number"
          name="min"
          style={{ width: 80 }}
          value={priceRange.min.toString()}
          onChange={e => setPriceRange({ ...priceRange, min: +e.target.value })}
        />
      </label>{' '}
      <label>
        Max: $
        <input
          type="number"
          name="max"
          style={{ width: 80 }}
          value={priceRange.max.toString()}
          onChange={e => setPriceRange({ ...priceRange, max: +e.target.value })}
        />
      </label>{' '}
      <button
        onClick={() =>
          filterProducts(productSearchList, categoryFilterList, priceRange)
        }
      >
        Apply
      </button>
    </fieldset>
  )
}

export default ProductFilters
