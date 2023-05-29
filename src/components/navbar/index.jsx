import { NavLink } from 'react-router-dom'

const activeStyles = ({ isActive }) => (isActive ? 'underline underline-offset-4' : undefined)

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light top-0">
      <ul className="flex items-center gap-4">
        <li className="font-semibold text-lg">
          <NavLink to="/">
            Shopi
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className={activeStyles}>
            All
          </NavLink>
        </li>
        <li>
          <NavLink to="/clothes" className={activeStyles}>
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink to="/electronics" className={activeStyles}>
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink to="/furnitures" className={activeStyles}>
            Furtnitures
          </NavLink>
        </li>
        <li>
          <NavLink to="/others" className={activeStyles}>
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
        <li>
          Cart (0)
        </li>
      </ul>
    </nav>
  )
}
