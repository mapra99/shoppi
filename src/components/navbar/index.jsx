import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../context'

const activeStyles = ({ isActive }) => (isActive ? 'underline underline-offset-4' : undefined)

export default function Navbar() {
  const context = useContext(ShoppingCartContext)

  const toggleCheckoutMenu = () => {
    if (context.checkoutMenuOpen) {
      context.closeCheckoutMenu()
    } else {
      context.openCheckoutMenu()
    }
  }

  return (
    <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light top-0">
      <ul className="flex items-center gap-4">
        <li className="font-semibold text-lg">
          <NavLink
            to="/"
          >
            Shopi
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className={activeStyles}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/clothes"
            className={activeStyles}
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/electronics"
            className={activeStyles}
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/others"
            className={activeStyles}
          >
            Others
          </NavLink>
        </li>
      </ul>

      <ul className="flex items-center gap-4">
        <li className="text-black/60">
          mprada@hey.com
        </li>
        <li>
          <NavLink to="/my-orders" className={activeStyles}>
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink to="/my-account" className={activeStyles}>
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink to="/sign-in" className={activeStyles}>
            Sign in
          </NavLink>
        </li>
        <li
          className="flex items-center gap-1 cursor-pointer"
          onClick={toggleCheckoutMenu}
        >
          <ShoppingBagIcon className='h-6 w-6 text-black' /> ({ context.count })
        </li>
      </ul>
    </nav>
  )
}
