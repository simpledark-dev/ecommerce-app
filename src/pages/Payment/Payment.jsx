import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import * as API from 'api/mockAPIs'
import { PATH } from 'constants'

const Payment = () => {
  const { currentUser } = useSelector(state => state.currentUser)
  const navigate = useNavigate()

  const handlePlaceOrder = async () => {
    try {
      await API.updateUserOrders({
        userId: currentUser.id,
        orderedProducts: [],
        shippingInfo: {}
      })
      console.log('Done')
      navigate(PATH.PURCHASE_SUCCESS)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <p>
        1) Checkout - <b>2) Payment</b> - 3) Purchase Success
      </p>
      <button onClick={handlePlaceOrder}>Place Order</button>
    </div>
  )
}

export default Payment
