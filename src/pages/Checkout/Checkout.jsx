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
          key={productInCart.product_id}
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
            <button>-</button> {productInCart.quantity} <button>+</button>{' '}
          </div>
          <div> ${productInCart.subTotal}</div>
        </div>
      ))}
    </div>
  )
}

export default Checkout
