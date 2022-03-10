import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import { ProductSearchScreen, ProductScreen } from 'screens'

const App = () => {
  return (
    <div className="App">
      <p>
        <Link to="/">ProductSearch </Link>
        <Link to="/details-test">Product</Link>
      </p>

      <Routes>
        <Route path="/" element={<ProductSearchScreen />} />
        <Route path="/details-test" element={<ProductScreen />} />
      </Routes>
    </div>
  )
}

export default App
