import {
  ProductSearchPage,
  ProductPage,
  Register,
  Login,
  Checkout,
  Payment,
  UserInfo,
  UserOrders,
  NotFound
} from 'pages'

const routes = [
  { path: '/signup', element: <Register /> },
  { path: '/login', element: <Login /> },
  { path: '/', element: <ProductSearchPage /> },
  { path: '/product/:id', element: <ProductPage /> },
  { path: '/checkout', element: <Checkout /> },
  { path: '/checkout/payment', element: <Payment /> },
  { path: '/orders', element: <UserOrders /> },
  { path: '/info', element: <UserInfo /> },
  { path: '*', element: <NotFound /> }
]

export default routes
