import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../home'
import MyAccount from '../my-account'
import MyOrder from '../my-order'
import MyOrders from '../my-orders'
import NotFound from '../not-found'
import SignIn from '../sign-in'
import Navbar from '../../components/navbar'
import CheckoutSideMenu from '../../components/checkout-side-menu'
import { ShoppingCartProvider } from '../../context'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-orders/:id', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/*', element: <NotFound /> },
  ])

  return routes
}

function App() {
  return (
    < ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
