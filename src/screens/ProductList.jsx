import { useState } from 'react'
import ProductCard from 'components/ProductCard'
import { products } from 'data'

const ProductList = () => {
  const [productList, setProductList] = useState(products)
  const [searchTextInput, setSearchTextInput] = useState('')

  const handleProductSearch = e => {
    e.preventDefault()
    // Search product by name (Keep it simple for now - later will potentially search based on categories as well)
    const searchedProducts = [...products].filter(product =>
      product.name.toLowerCase().includes(searchTextInput.toLowerCase())
    )
    setProductList(searchedProducts)
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
      {displayedProducts}
    </>
  )
}

export default ProductList
