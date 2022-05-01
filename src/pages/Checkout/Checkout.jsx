import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import * as API from 'api/mockAPIs'
import { PATH } from 'constants'
import { MOCK_TAX_RATE } from 'constants'

const Checkout = () => {
  const { currentUser } = useSelector(state => state.currentUser)
  const [cart, setCart] = useState([])
  const [orderSummary, setOrderSummary] = useState({
    subTotal: 0,
    shippingFees: 0,
    taxes: 0,
    total: 0
  })
  const [checkedOutCartItemIds, setCheckedOutCartItemIds] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    if (!currentUser) return navigate(PATH.HOME)

    const loadUserCart = async () => {
      const fetchedCart = await API.fetchUserCart({ userId: currentUser.id })
      setCart(fetchedCart)
    }

    loadUserCart()
  }, [currentUser, navigate])

  useEffect(() => {
    const checkedOutCart = cart.filter(product =>
      checkedOutCartItemIds.includes(
        `${product.product_id}-${JSON.stringify(product.selectedVariations)}`
      )
    )

    const subTotal = checkedOutCart.reduce(
      (acc, curr) => acc + Number(curr.subTotal),
      0
    )
    const shippingFees = subTotal > 0 ? 10.0 : 0
    const taxes = MOCK_TAX_RATE * subTotal

    setOrderSummary({
      subTotal,
      shippingFees,
      taxes,
      total: subTotal + shippingFees + taxes
    })
  }, [cart, checkedOutCartItemIds])

  if (!currentUser) return ''

  const handleCheckedItems = e => {
    const productId = e.target.value
    if (checkedOutCartItemIds.includes(productId)) {
      setCheckedOutCartItemIds(
        checkedOutCartItemIds.filter(itemId => itemId !== productId)
      )
      return
    }

    setCheckedOutCartItemIds([...checkedOutCartItemIds, productId])
  }

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
      <p>
        <b>1) Checkout</b> - 2) Payment - 3) Purchase Success{' '}
      </p>
      <h3>Your Cart</h3>
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
          <input
            type="checkbox"
            value={`${productInCart.product_id}-${JSON.stringify(
              productInCart.selectedVariations
            )}`}
            checked={checkedOutCartItemIds.includes(
              `${productInCart.product_id}-${JSON.stringify(
                productInCart.selectedVariations
              )}`
            )}
            onChange={handleCheckedItems}
          />
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

      <div>
        <h3>Order Summary</h3>
        <p>Subtotal: ${orderSummary.subTotal.toFixed(2)}</p>
        <p>Shipping: ${orderSummary.shippingFees.toFixed(2)}</p>
        <p>Taxes: ${orderSummary.taxes.toFixed(2)}</p>
        <p>Total: ${orderSummary.total.toFixed(2)}</p>
      </div>
      <button
        disabled={checkedOutCartItemIds.length === 0}
        onClick={() => navigate(PATH.PAYMENT)}
      >
        Checkout ({checkedOutCartItemIds.length})
      </button>
    </div>
  )
}

export default Checkout
