import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { removeCurrentUser } from 'redux/slices/userSlice'

const Navbar = () => {
  const { pathname } = useLocation()
  const { currentUser } = useSelector(state => state.currentUser)
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(removeCurrentUser())
  }

  return (
    <nav>
      <h1>
        <Link to="/signup">Sign up</Link>
        {' | '}
        <Link to="/login" state={{ previousPath: pathname }}>
          Login
        </Link>
        {' | '}
        <Link to="/">ProductSearch </Link>
        {' | '}
        <Link to="/checkout">Checkout</Link>
        {' | '}
        <Link to="/checkout/payment">Payment</Link>
        {' | '}
        <Link to="/orders">UserOrders</Link>
        {' | '}
        <Link to="/info">UserInfo</Link>
        {' | '}
        <Link to="/404">Not Found</Link>
      </h1>
      {currentUser && <button onClick={handleLogout}>Logout</button>}
    </nav>
  )
}

export default Navbar
