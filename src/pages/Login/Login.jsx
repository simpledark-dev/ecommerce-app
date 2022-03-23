import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import bcryptjs from 'bcryptjs'
import { setCurrentUser } from 'redux/slices/userSlice'

const Login = () => {
  const { state } = useLocation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const { currentUser } = useSelector(state => state.currentUser)

  useEffect(() => {
    if (currentUser) navigate('/')
  }, [currentUser, navigate])

  const handleLogin = async e => {
    e.preventDefault()
    setError('')

    const existingUsers = JSON.parse(localStorage.getItem('users')) || []

    const foundUser = existingUsers.find(user => user.email === email)

    const wrongCredentialsMessage = 'Wrong email or password.'

    if (!foundUser) return setError(wrongCredentialsMessage)

    const passwordMatched = await bcryptjs.compare(password, foundUser.password)

    if (!passwordMatched) return setError(wrongCredentialsMessage)

    const storedFoundUser = { ...foundUser }
    delete storedFoundUser.password

    setCurrentUser(storedFoundUser)

    navigate(state?.previousPath ? -1 : '/')
  }

  if (currentUser) return ''

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
        <p style={{ color: 'red' }}>{error}</p>
        <button onSubmit={handleLogin}>Login</button>
      </form>
      <Link to="/signup"> Register </Link>
    </>
  )
}

export default Login
