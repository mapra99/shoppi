import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import Layout from '../../components/layout'
import OrdersCard from '../../components/orders-card'
import { ShoppingCartContext } from '../../context'

function MyOrders() {
  const context = useContext(ShoppingCartContext)

  return (
    <Layout>
      <div className="flex w-80 items-center relative justify-center mb-10">
        <Link to="/my-orders/last" className="absolute left-0">
          <ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer" />
        </Link>
        <h1>My Orders</h1>
      </div>

      { context.orders.map((order, index) => (
        <Link to={`/my-orders/${index}`} key={index}>
          <OrdersCard key={order.date} order={order} />
        </Link>
      ))}
    </Layout>
  )
}

export default MyOrders
