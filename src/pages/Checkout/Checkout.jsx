import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Checkout = () => {
  const { currentUser } = useSelector(state => state.currentUser)
  const navigate = useNavigate()

  useEffect(() => {
    if (!currentUser) navigate('/')
  }, [currentUser, navigate])

  if (!currentUser) return ''

  return <div>Checkout</div>
}

export default Checkout
