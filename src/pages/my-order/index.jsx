import { useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../context'
import Layout from '../../components/layout'
import OrderCard from '../../components/order-card'

function MyOrder() {
  const { id } = useParams()
  const context = useContext(ShoppingCartContext)

  const order = id === 'last' ? context.orders.slice(-1)[0] : context.orders[id]

  return (
    <Layout>
      <div className="flex w-80 items-center relative justify-center mb-10">
        <Link to="/my-orders" className="absolute left-0">
          <ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer" />
        </Link>
        <h1>My Order</h1>
      </div>

      <div className="flex flex-col w-80 gap-3">
        { order?.products.map(product => (
          <OrderCard
            key={product.id}
            id={product.id}
            imageUrl={product.images[0]}
            price={product.price}
            title={product.title}
          />
        )) }
      </div>
    </Layout>
  )
}

export default MyOrder
