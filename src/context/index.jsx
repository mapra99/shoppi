import { createContext, useState } from 'react'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
  const [count, setCount] = useState(0)

  const [productDetailsOpen, setProductDetailsOpen] = useState(false)
  const openProductDetails = () => {
    setProductDetailsOpen(true)
    setCheckoutMenuOpen(false)
  }
  const closeProductDetails = () => {
    setProductDetailsOpen(false)
  }

  const [selectedProduct, setSelectedProduct] = useState(null)

  const [cartProducts, setCartProducts] = useState([])

  const [checkoutMenuOpen, setCheckoutMenuOpen] = useState(false)
  const openCheckoutMenu = () => {
    setCheckoutMenuOpen(true)
    setProductDetailsOpen(false)
  }
  const closeCheckoutMenu = () => {
    setCheckoutMenuOpen(false)
  }

  const [orders, setOrders] = useState([])

  return (
    <ShoppingCartContext.Provider value={{
      count,
      setCount,
      openProductDetails,
      closeProductDetails,
      productDetailsOpen,
      selectedProduct,
      setSelectedProduct,
      cartProducts,
      setCartProducts,
      checkoutMenuOpen,
      openCheckoutMenu,
      closeCheckoutMenu,
      orders,
      setOrders,
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}
