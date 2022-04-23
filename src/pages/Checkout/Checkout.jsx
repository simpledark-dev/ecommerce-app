import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import * as API from 'api/mockAPIs'
import { PATH } from 'constants'

const Checkout = () => {
  const { currentUser } = useSelector(state => state.currentUser)
  const [cart, setCart] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    if (!currentUser) return navigate(PATH.HOME)

    const loadUserCart = async () => {
      const fetchedCart = await API.fetchUserCart({ userId: currentUser.id })
      setCart(fetchedCart)
    }

    loadUserCart()
  }, [currentUser, navigate])

  if (!currentUser) return ''

  const handleAddToCart = async (productId, variationSelection, quantity) => {
    try {
      await API.updateUserCart({
        userId: currentUser.id,
        productToAddToCart: {
          productId: productId,
          selectedVariations: variationSelection,
          quantity: quantity
        }
      })

      const fetchedCart = await API.fetchUserCart({ userId: currentUser.id })
      setCart(fetchedCart)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      <h2>Checkout</h2>
      {cart.map(productInCart => (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center'
          }}
          key={`${productInCart.product_id}-${JSON.stringify(
            productInCart.selectedVariations
          )}`}
        >
          <img style={{ width: 50 }} src={productInCart.image} alt="product" />
          <div>
            <p>{productInCart.name}</p>
            {productInCart.selectedVariations?.map(variation => (
              <div key={`${variation.key}${variation.value}`}>
                {variation.key}: {variation.value}
              </div>
            ))}
          </div>

          <div>${productInCart.price}</div>
          <div>
            {' '}
            <button
              onClick={() =>
                handleAddToCart(
                  productInCart.product_id,
                  productInCart.selectedVariations,
                  -1
                )
              }
            >
              -
            </button>{' '}
            {productInCart.quantity}{' '}
            <button
              onClick={() =>
                handleAddToCart(
                  productInCart.product_id,
                  productInCart.selectedVariations,
                  1
                )
              }
            >
              +
            </button>{' '}
          </div>
          <div> ${productInCart.subTotal}</div>
          <button
            onClick={() =>
              handleAddToCart(
                productInCart.product_id,
                productInCart.selectedVariations,
                -1 * productInCart.quantity
              )
            }
          >
            Del
          </button>
        </div>
      ))}
    </div>
  )
}

export default Checkout
