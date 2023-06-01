import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { XMarkIcon } from '@heroicons/react/24/solid'
import OrderCard from '../order-card'
import { ShoppingCartContext } from '../../context'
import { totalPrice } from '../../utils'

export default function CheckoutSideMenu() {
  const context = useContext(ShoppingCartContext)

  const handleDelete = (productId) => {
    const newCartProducts = context.cartProducts.filter(product => product.id !== productId)
    context.setCartProducts(newCartProducts)
    context.setCount(context.count - 1)
  }

  const handleCheckout = () => {
    const newOrder = {
      products: [...context.cartProducts],
      date: new Date(),
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts)
    }

    context.setOrders([...context.orders, newOrder])
    context.setCartProducts([])
    context.setCount(0)
    context.closeCheckoutMenu()
  }

  return (
    <aside
      className={`
        flex-col fixed bg-white right-0 border border-black rounded-lg w-[360px] h-[calc(100vh-68px)] top-[68px]
        ${context.checkoutMenuOpen ? 'flex' : 'hidden'}
      `}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">
          My Order
        </h2>
        <div onClick={context.closeCheckoutMenu} className="cursor-pointer">
          <XMarkIcon className="h-6 w-6 text-black" />
        </div>
      </div>

      <div className="px-6 overflow-y-scroll flex-1">
        { context.cartProducts.map(product => (
          <OrderCard
            key={product.id}
            id={product.id}
            imageUrl={product.images[0]}
            price={product.price}
            title={product.title}
            handleDelete={handleDelete}
          />
        )) }
      </div>

      <div className="px-6 mb-6">
        <p className='flex justify-between items-center'>
          <span className="font-light">Total:</span>
          <span className="font-medium text-2xl">${totalPrice(context.cartProducts)}</span>
        </p>

        <Link to="/my-orders/last" >
          <button
            className="w-full bg-black text-white text-sm rounded-lg py-3 mt-4"
            onClick={handleCheckout}
          >
            Checkout
          </button>
        </Link>
      </div>
    </aside>
  )
}
