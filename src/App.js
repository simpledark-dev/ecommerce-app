import './App.css'
import { Routes, Route } from 'react-router-dom'
import routes from 'routes'
import { Layout } from 'layouts'

const App = () => {
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
