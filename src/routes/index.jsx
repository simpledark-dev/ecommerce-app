import { PATH } from 'constants'
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
  { path: PATH.SIGN_UP, element: <Register /> },
  { path: PATH.LOGIN, element: <Login /> },
  { path: PATH.HOME, element: <ProductSearchPage /> },
  { path: PATH.PRODUCT, element: <ProductPage /> },
  { path: PATH.CHECKOUT, element: <Checkout /> },
  { path: PATH.PAYMENT, element: <Payment /> },
  { path: PATH.ORDERS, element: <UserOrders /> },
  { path: PATH.USER_INFO, element: <UserInfo /> },
  { path: PATH.INVALID, element: <NotFound /> }
]

export default routes
