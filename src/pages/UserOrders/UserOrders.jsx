import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { PATH } from 'constants'

const UserOrders = () => {
  const { currentUser } = useSelector(state => state.currentUser)
  const navigate = useNavigate()

  useEffect(() => {
    if (!currentUser) navigate(PATH.HOME)
  }, [currentUser, navigate])

  return <div>UserOrders</div>
}

export default UserOrders
