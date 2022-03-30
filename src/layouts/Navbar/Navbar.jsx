import { PATH } from 'constants'
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
        <Link to={PATH.SIGN_UP}>Sign up</Link>
        {' | '}
        <Link to={PATH.LOGIN} state={{ previousPath: pathname }}>
          Login
        </Link>
        {' | '}
        <Link to={PATH.HOME}>ProductSearch </Link>
        {' | '}
        <Link to={PATH.CHECKOUT}>Checkout</Link>
        {' | '}
        <Link to={PATH.PAYMENT}>Payment</Link>
        {' | '}
        <Link to={PATH.ORDERS}>UserOrders</Link>
        {' | '}
        <Link to={PATH.USER_INFO}>UserInfo</Link>
        {' | '}
        <Link to={PATH.NOT_FOUND}>Not Found</Link>
      </h1>
      {currentUser && <button onClick={handleLogout}>Logout</button>}
    </nav>
  )
}

export default Navbar
