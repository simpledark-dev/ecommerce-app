import { useNavigate } from 'react-router-dom'

const ProductPage = () => {
  let navigate = useNavigate()

  return (
    <div>
      <button onClick={() => navigate(-1)}>Back</button>
      <p>ProductPage</p>
    </div>
  )
}

export default ProductPage
