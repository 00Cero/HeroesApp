
import { NavLink } from 'react-router-dom'

export const NavLinkCustom = ({ to, name }) => {
  return (
    <NavLink
      className={({ isActive }) => `flex-shrink-0 nav-item nav-link ${isActive ? 'active' : ''}`}
      to={to}
    >{name}
    </NavLink>
  )
}
