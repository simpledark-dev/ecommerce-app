import { useState, useEffect } from 'react'
import { products, reviews, orders } from 'data/data'
import ProductCard from 'components/ProductCard'
import {
  getSortedProductsByBestSelling,
  getSortedProductsByNumReviews,
  getSortedProductsByPrice,
  getSortedProductsByUploadTime
} from 'services/productSortHelpers'
import { calculateProductPrices } from 'services/productPriceHelpers'

const SORT_BY_VALUES = {
  mostPopular: 'most-popular',
  newest: 'most-recent',
  bestSelling: 'best-selling',
  priceLowToHigh: 'price-low-to-high',
  priceHighToLow: 'price-high-to-low'
}

const ProductList = () => {
  const [productList, setProductList] = useState([])
  const [searchTextInput, setSearchTextInput] = useState('')
  const [selectedSortBy, setSelectedSortBy] = useState('')

  useEffect(() => {
    const currentSortBy = new URLSearchParams(window.location.search).get(
      'sort'
    )
    sortProductsBy(
      products,
      (Object.values(SORT_BY_VALUES).includes(currentSortBy) &&
        currentSortBy) ||
        SORT_BY_VALUES.mostPopular
    )
  }, [])

  const sortProductsBy = (productList, sortByValue) => {
    window.history.replaceState(null, null, `?sort=${sortByValue}`)
    setSelectedSortBy(sortByValue)

    if (sortByValue === SORT_BY_VALUES.mostPopular) {
      return setProductList(getSortedProductsByNumReviews(productList, reviews))
    }
    if (sortByValue === SORT_BY_VALUES.newest) {
      return setProductList(getSortedProductsByUploadTime(productList))
    }
    if (sortByValue === SORT_BY_VALUES.bestSelling) {
      return setProductList(getSortedProductsByBestSelling(productList, orders))
    }
    if (sortByValue === SORT_BY_VALUES.priceLowToHigh) {
      return setProductList(getSortedProductsByPrice(productList))
    }
    if (sortByValue === SORT_BY_VALUES.priceHighToLow) {
      return setProductList(
        getSortedProductsByPrice(productList, { lowToHigh: false })
      )
    }
  }

  const handleProductSearch = e => {
    e.preventDefault()
    const searchedProducts = [...products].filter(product =>
      product.name.toLowerCase().includes(searchTextInput.toLowerCase())
    )
    const defaultSortByValue = SORT_BY_VALUES.mostPopular
    sortProductsBy(searchedProducts, defaultSortByValue)
  }

  const handleSortByOnChange = e => {
    sortProductsBy(productList, e.target.value)
  }

  const displayedProducts = productList.map(product => {
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
