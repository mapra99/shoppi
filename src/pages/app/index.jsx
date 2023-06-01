import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../home'
import MyOrder from '../my-order'
import MyOrders from '../my-orders'
import NotFound from '../not-found'
import Navbar from '../../components/navbar'
import CheckoutSideMenu from '../../components/checkout-side-menu'
import { ShoppingCartProvider } from '../../context'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/:category', element: <Home /> },
    { path: '/my-orders/:id', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
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
