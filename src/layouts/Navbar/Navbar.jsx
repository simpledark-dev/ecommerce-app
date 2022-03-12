import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <h1>
      <Link to="/">ProductSearch </Link>
      <Link to="/product">Product</Link>
    </h1>
  )
}

export default Navbar
