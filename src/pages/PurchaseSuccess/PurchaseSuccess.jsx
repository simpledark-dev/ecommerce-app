import { Link } from 'react-router-dom'
import { PATH } from 'constants'

const PurchaseSuccess = () => {
  return (
    <div>
      <p>
        1) Checkout - 2) Payment - <b>3) Purchase Success</b>
      </p>

      <h3>Transaction Success!</h3>
      <p>Thank you for your purchase</p>

      <div>
        <Link to={PATH.ORDERS}>Track Your Orders</Link>
      </div>
      <div>
        <Link to={PATH.HOME}>Browse More Products</Link>
      </div>
    </div>
  )
}

export default PurchaseSuccess
