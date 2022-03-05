import ProductCard from 'components/ProductCard'
import { products } from 'data'

const ProductList = () => {
  const productList = products.map(product => (
    <ProductCard
      key={product.id}
      image={product.images[0]}
      name={product.name}
      price={product.price_in_USD}
    />
  ))
  return <>{productList}</>
}

export default ProductList
