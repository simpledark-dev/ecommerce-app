import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <h1>
        <Link to="/signup">Sign up</Link>
        {' | '}
        <Link to="/login">Login</Link>
        {' | '}
        <Link to="/">ProductSearch </Link>
        {' | '}
        <Link to="/cart">Cart</Link>
        {' | '}
        <Link to="/checkout">Checkout</Link>
        {' | '}
        <Link to="/orders">UserOrders</Link>
        {' | '}
        <Link to="/info">UserInfo</Link>
        {' | '}
        <Link to="/404">Not Found</Link>
      </h1>
    </nav>
  )
}

export default Navbar
