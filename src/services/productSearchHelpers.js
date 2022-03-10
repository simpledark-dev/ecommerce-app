const getSearchedProducts = (products, searchText) => {
  return [...products].filter(product =>
    product.name.toLowerCase().includes(searchText.toLowerCase())
  )
}

export { getSearchedProducts }
