import { useState, useEffect } from 'react'
import ProductCard from 'components/ProductCard'
import { products, reviews } from 'data'

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
    sortProductsBy(products, SORT_BY_VALUES.mostPopular)
  }, [])

  const sortProductsBy = (productList, sortByValue) => {
    setSelectedSortBy(sortByValue)
    // Most Popular - Sort product by number of reviews
    if (sortByValue === 'most-popular') {
      const sortedProductList = [...productList].sort((p1, p2) => {
        const p1NumberOfReviews = [...reviews].filter(
          review => review.product_id === p1.id
        ).length
        const p2NumberOfReviews = [...reviews].filter(
          review => review.product_id === p2.id
        ).length

        return p2NumberOfReviews - p1NumberOfReviews
      })
      return setProductList(sortedProductList)
    }
    // Most Recent - Sort product by upload time
    if (sortByValue === SORT_BY_VALUES.newest) {
      const sortedProductList = [...productList].sort(
        (p1, p2) =>
          new Date(p2.upload_time).getTime() -
          new Date(p1.upload_time).getTime()
      )
      return setProductList(sortedProductList)
    }
    // Best selling - Sort product by number of sells (based on fullfilled orders)
    if (sortByValue === SORT_BY_VALUES.bestSelling) {
      const sortedProductList = []
      return setProductList(sortedProductList)
    }
    // Price Low to High
    if (sortByValue === SORT_BY_VALUES.priceLowToHigh) {
      const sortedProductList = []
      return setProductList(sortedProductList)
    }
    // Price High to Low
    if (sortByValue === SORT_BY_VALUES.priceHighToLow) {
      const sortedProductList = []
      return setProductList(sortedProductList)
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
    const basePrice = product.base_price_in_USD
    const variations = product.variations || []
    const discount = product.discount || 0

    // Get min price
    let minPrice = basePrice
    variations.forEach(variation => {
      const prices = variation.variation_price_list.map(
        variationPrice => variationPrice.price_in_USD
      )
      minPrice += Math.min(...prices)
    })

    // Get max price
    let maxPrice = basePrice
    variations.forEach(variation => {
      const prices = variation.variation_price_list.map(
        variationPrice => variationPrice.price_in_USD
      )
      maxPrice += Math.max(...prices)
    })

    const discountedMinPrice = (minPrice * (1 - discount)).toFixed(2)
    const discountedMaxPrice = (maxPrice * (1 - discount)).toFixed(2)

    return (
      <ProductCard
        key={product.id}
        image={product.images[0]}
        name={product.name}
        price={{
          minPrice,
          maxPrice,
          discount,
          discountedMinPrice,
          discountedMaxPrice
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
