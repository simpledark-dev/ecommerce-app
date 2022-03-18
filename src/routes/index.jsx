import {
  ProductSearchPage,
  ProductPage,
  Register,
  Login,
  Cart,
  Checkout,
  UserInfo,
  UserOrders,
  NotFound
} from 'pages'

const routes = [
  { path: '/signup', element: <Register /> },
  { path: '/login', element: <Login /> },
  { path: '/', element: <ProductSearchPage /> },
  { path: '/product/:id', element: <ProductPage /> },
  { path: '/cart', element: <Cart /> },
  { path: '/checkout', element: <Checkout /> },
  { path: '/orders', element: <UserOrders /> },
  { path: '/info', element: <UserInfo /> },
  { path: '*', element: <NotFound /> }
]

export default routes
