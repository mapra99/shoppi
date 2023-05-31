import { useContext } from 'react'
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

      <div className="px-6 overflow-y-scroll">
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

      <div className="px-6">
        <p className='flex justify-between items-center'>
          <span className="font-light">Total:</span>
          <span className="font-medium text-2xl">${totalPrice(context.cartProducts)}</span>
        </p>
      </div>
    </aside>
  )
}
