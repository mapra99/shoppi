import { useContext } from "react"
import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from "../../context"

const AddItemButton = ({ isInCart, onItemAdded }) => {
  if ( isInCart ) {
    return (
      <div className="absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2 p-1">
        <CheckIcon className="w-6 h-6 text-white" />
      </div>
    )
  }

  return (
    <div
      className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
      onClick={onItemAdded}
    >
      <PlusIcon className="w-6 h-6 text-black" />
    </div>
  )
}

export default function Card({ item }) {
  const context = useContext(ShoppingCartContext)

  const showProduct = () => {
    context.setSelectedProduct(item)
    context.openProductDetails()
  }

  const addToCart = (event) => {
    event.stopPropagation();

    const newCartProducts = [...context.cartProducts, item]
    context.setCartProducts(newCartProducts)
    context.setCount(context.count + 1)
    context.openCheckoutMenu()
  }

  const isInCart = !!context.cartProducts.find(product => product.id === item.id)

  return (
    <div
      className="bg-white cursor-pointer w-56 h-60"
      onClick={showProduct}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-full text-black text-xs px-3 py-1 m-2">
          { item.category.name }
        </span>
        <img className="w-full h-full object-cover rounded-lg" src={item.images[0]} alt={item.title} />

        <AddItemButton
          isInCart={isInCart}
          onItemAdded={addToCart}
        />
      </figure>

      <p className="flex justify-between items-center">
        <span className="text-sm font-light line-clamp-2">
          { item.title }
        </span>
        <span className="text-lg font-medium">
          ${ item.price }
        </span>
      </p>
    </div>
  )
}
