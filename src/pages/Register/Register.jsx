import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { PATH } from 'constants'
import * as API from 'api/mockAPIs'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmedPassword, setConfirmedPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const { currentUser } = useSelector(state => state.currentUser)

  useEffect(() => {
    if (currentUser) navigate(PATH.HOME)
  }, [currentUser, navigate])

  const registerUser = async e => {
    e.preventDefault()
    try {
      await API.signUp({
        name,
        email,
        password,
        confirmedPassword,
        is_admin: false,
        delivery_address: '',
        phone_number: ''
      })
      navigate(PATH.LOGIN)
    } catch (error) {
      return setError(error.message)
    }
  }

  if (currentUser) return ''

  return (
    <>
      <form onSubmit={registerUser}>
        <div>
          <label>
            Name:{' '}
            <input
              type="text"
              onChange={e => setName(e.target.value)}
              value={name}
              placeholder="What's your name?"
              required
            />
          </label>
        </div>
        <br />
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
              // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
              // title="Must contain at least one number and one uppercase and lowercase letter, and at least 6 or more characters"
              required
            />
          </label>
        </div>
        <br />
        <div>
          <label>
            Confirm Password:{' '}
            <input
              type="password"
              onChange={e => setConfirmedPassword(e.target.value)}
              value={confirmedPassword}
              placeholder="Re-type your password"
              required
            />
          </label>
        </div>
        <br />
        <p style={{ color: 'red' }}>{error}</p>
        <button onSubmit={registerUser}>Sign up</button>
      </form>
      <Link to={PATH.LOGIN}> Login </Link>
    </>
  )
}

export default Register
