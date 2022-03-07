import { useState, useEffect } from 'react'
import ProductCard from 'components/ProductCard'
import { products, reviews, orders } from 'data'

const SORT_BY_VALUES = {
  mostPopular: 'most-popular',
  newest: 'most-recent',
  bestSelling: 'best-selling',
  priceLowToHigh: 'price-low-to-high',
  priceHighToLow: 'price-high-to-low'
}

const calculateProductPrices = product => {
  const basePrice = product.base_price_in_USD
  const variations = product.variations || []
  const discount = product.discount || 0

  // Get min and max price
  let minPrice = basePrice
  let maxPrice = basePrice

  variations.forEach(variation => {
    const prices = variation.variation_price_list.map(
      variationPrice => variationPrice.price_in_USD
    )
    minPrice += Math.min(...prices)
    maxPrice += Math.max(...prices)
  })

  const discountedMinPrice = minPrice * (1 - discount)
  const discountedMaxPrice = maxPrice * (1 - discount)

  return {
    minPrice,
    maxPrice,
    discount,
    discountedMinPrice,
    discountedMaxPrice
  }
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
      const sortedProductList = [...productList].sort((p1, p2) => {
        let soldP1 = 0
        let soldP2 = 0
        orders.forEach(order => {
          const p1Found = order.order.find(
            product => product.product_id === p1.id
          )
          const p2Found = order.order.find(
            product => product.product_id === p2.id
          )
          if (p1Found) soldP1 += p1Found.quantity
          if (p2Found) soldP2 += p2Found.quantity
        })

        return soldP2 - soldP1
      })
      return setProductList(sortedProductList)
    }
    // Price Low to High
    if (sortByValue === SORT_BY_VALUES.priceLowToHigh) {
      const sortedProductList = [...productList].sort((p1, p2) => {
        const p1Prices = calculateProductPrices(p1)
        const p2Prices = calculateProductPrices(p2)
        return (
          Math.min(p1Prices.minPrice, p1Prices.discountedMinPrice) -
          Math.min(p2Prices.minPrice, p2Prices.discountedMinPrice)
        )
      })
      return setProductList(sortedProductList)
    }
    // Price High to Low
    if (sortByValue === SORT_BY_VALUES.priceHighToLow) {
      const sortedProductList = [...productList].sort((p1, p2) => {
        const p1Prices = calculateProductPrices(p1)
        const p2Prices = calculateProductPrices(p2)
        return (
          Math.max(p2Prices.maxPrice, p2Prices.discountedMaxPrice) -
          Math.max(p2Prices.maxPrice, p1Prices.discountedMaxPrice)
        )
      })
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
