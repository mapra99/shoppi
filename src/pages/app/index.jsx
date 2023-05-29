import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../home'
import MyAccount from '../my-account'
import MyOrder from '../my-order'
import MyOrders from '../my-orders'
import NotFound from '../not-found'
import SignIn from '../sign-in'
import Navbar from '../../components/navbar'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/*', element: <NotFound /> },
  ])

  return routes
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <Navbar />
    </BrowserRouter>
  )
}

export default App
