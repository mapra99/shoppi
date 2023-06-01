import { createContext, useState, useEffect } from 'react'
import { filterItemsByTitle, filterItemsByCategory } from '../utils'

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

  const [items, setItems] = useState(null)
  const [filteredItems, setFilteredItems] = useState(null)
  const [searchTitleTerm, setSearchTitleTerm] = useState(null)
  const [searchCategoryTerm, setSearchCategoryTerm] = useState(null)

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then(data => setItems(data))
  }, [])

  useEffect(() => {
    if (!items) return

    let newFilteredItems = [...items]
    if (!searchTitleTerm && !searchCategoryTerm) {
      setFilteredItems([...newFilteredItems])
      return
    }

    if (searchTitleTerm) {
      newFilteredItems = filterItemsByTitle(newFilteredItems, searchTitleTerm)
    }

    if (searchCategoryTerm) {
      newFilteredItems = filterItemsByCategory(newFilteredItems, searchCategoryTerm)
    }

    setFilteredItems(newFilteredItems)
  }, [items, searchTitleTerm, searchCategoryTerm])

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
      items,
      searchTitleTerm,
      setSearchTitleTerm,
      setSearchCategoryTerm,
      filteredItems
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}
