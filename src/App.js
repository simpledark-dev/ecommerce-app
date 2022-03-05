import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import { ProductList, ProductDetails } from 'screens'

const App = () => {
  return (
    <div className="App">
      <Link to="/">ProductList</Link>
      <Link to="/details-test">ProductDetails</Link>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/details-test" element={<ProductDetails />} />
      </Routes>
    </div>
  )
}

export default App
