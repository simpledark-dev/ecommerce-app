import { useState, useEffect } from 'react'
import * as API from 'api/mockAPIs'
import { PATH } from 'constants'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { removeCurrentUser } from 'redux/slices/userSlice'

const {
  SIGN_UP,
  LOGIN,
  HOME,
  CHECKOUT,
  PAYMENT,
  ORDERS,
  USER_INFO,
  NOT_FOUND
} = PATH

const Navbar = () => {
  const { pathname } = useLocation()
  const { currentUser } = useSelector(state => state.currentUser)
  const dispatch = useDispatch()

  const [cart, setCart] = useState(null)

  useEffect(() => {
    if (!currentUser) return

    const loadUserCart = async () => {
      const fetchedCart = await API.fetchUserCart({ userId: currentUser.id })
      setCart(fetchedCart)
    }

    loadUserCart()
  })

  const handleLogout = () => {
    dispatch(removeCurrentUser())
  }

  return (
    <nav>
      <h1>
        <Link to={SIGN_UP}>Sign up</Link>
        {' | '}
        <Link to={LOGIN} state={{ previousPath: pathname }}>
          Login
        </Link>
        {' | '}
        <Link to={HOME}>ProductSearch </Link>
        {' | '}
        {currentUser && (
          <>
            <Link to={CHECKOUT}>Cart {cart && `(${cart.length})`}</Link> |
          </>
        )}
        <Link to={PAYMENT}>Payment</Link>
        {' | '}
        <Link to={ORDERS}>UserOrders</Link>
        {' | '}
        <Link to={USER_INFO}>UserInfo</Link>
        {' | '}
        <Link to={NOT_FOUND}>Not Found</Link>
      </h1>
      {currentUser && <button onClick={handleLogout}>Logout</button>}
    </nav>
  )
}

export default Navbar
