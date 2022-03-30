import { useEffect } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import routes from 'routes'
import { Layout } from 'layouts'
import { users } from 'pseudoDB'

const storePreGeneratedData = () => {
  const existingUsers = localStorage.getItem('users')
  if (!existingUsers) {
    localStorage.setItem('users', JSON.stringify(users))
  }
}

const App = () => {
  useEffect(() => {
    storePreGeneratedData()
  }, [])

  return (
    <div className="App">
      <Layout>
        <Routes>
          {routes.map(route => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Layout>
    </div>
  )
}

export default App
