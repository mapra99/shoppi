import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../context'

export default function ProductDetai() {
  const context = useContext(ShoppingCartContext)

  return (
    <aside
      className={`
        flex-col fixed bg-white right-0 border border-black rounded-lg w-[360px] h-[calc(100vh-68px)] top-[68px]
        ${context.productDetailsOpen ? 'flex' : 'hidden'}
      `}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">
          Detail
        </h2>
        <div onClick={context.closeProductDetails} className="cursor-pointer">
          <XMarkIcon className="h-6 w-6 text-black" />
        </div>
      </div>

      { context.selectedProduct ? (
        <>
          <figure className="px-6">
            <img
              className="w-full h-full object-cover rounded-lg"
              src={context.selectedProduct.images[0]}
              alt={context.selectedProduct.title}
            />
          </figure>

          <p className="flex flex-col p-6">
            <span className="font-medium text-2xl mb-2">${ context.selectedProduct.price }</span>
            <span className="font-medium text-md">{ context.selectedProduct.title }</span>
            <span className="font-light text-sm">{ context.selectedProduct.description }</span>
          </p>
        </>
      ) : null }
    </aside>
  )
}
