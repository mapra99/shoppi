import { ChevronRightIcon } from "@heroicons/react/24/solid"

export default function OrdersCard({ order }) {
  return (
    <div className="flex justify-between items-center mb-4 border border-black p-4 rounded-lg w-80">
      <div className="flex justify-between w-full">
        <div className="flex flex-col">
          <span className="font-light">
            { order.date.toLocaleString() }
          </span>
          <span className="font-light">
            { order.totalProducts } { order.totalProducts > 1 ? "items" : "item" }
          </span>
        </div>

        <div className="flex items-center gap-1">
          <span className="font-medium text-2xl">
            ${ order.totalPrice }
          </span>
          <ChevronRightIcon className="h-6 w-6 text-black cursor-pointer" />
        </div>
      </div>
    </div>
  )
}
