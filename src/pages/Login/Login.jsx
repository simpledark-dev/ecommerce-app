import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { getUser } from 'redux/slices/userSlice'
import { PATH } from 'constants'

const Login = () => {
  const { state } = useLocation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const { currentUser, loading, error } = useSelector(
    state => state.currentUser
  )
  const dispatch = useDispatch()

  useEffect(() => {
    if (currentUser) navigate(PATH.HOME)
  }, [currentUser, navigate])

  const handleLogin = async e => {
    e.preventDefault()
    dispatch(getUser({ email, password }))
    if (currentUser) navigate(state?.previousPath ? -1 : PATH.HOME)
  }

  if (loading) return 'Signing in...'

  return (
    <>
      <form onSubmit={handleLogin}>
        <div>
          <label>
            Email:{' '}
            <input
              type="email"
              onChange={e => setEmail(e.target.value)}
              value={email}
              placeholder="What's your email?"
              required
            />
          </label>
        </div>
        <br />
        <div>
          <label>
            Password:{' '}
            <input
              type="password"
              onChange={e => setPassword(e.target.value)}
              value={password}
              placeholder="What's your password?"
              required
            />
          </label>
        </div>
        <br />
        {error && <p style={{ color: 'red' }}>{error.message}</p>}
        <button onSubmit={handleLogin}>Login</button>
      </form>
      <Link to={PATH.SIGN_UP}> Register </Link>
    </>
  )
}

export default Login
