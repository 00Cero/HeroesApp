import { Link, useNavigate } from 'react-router-dom'
import { NavLinkCustom } from './NavLinkCustom'

export const Navbar = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    // replace:true -> replace the history ledger and if copy and paste in another navigator
    // if click back history button goes off the page
    navigate('/login', { replace: true })
  }

  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-dark py-2 px-4'>

      <Link
        className='navbar-brand'
        to='/'
      >
        Inicio
      </Link>

      <div className='navbar-collapse'>
        <div className='navbar-nav'>
          <NavLinkCustom to='/marvel' name='Marvel' />
          <NavLinkCustom to='/dc' name='DC' />
          <NavLinkCustom to='/search' name='Search 🔎' />
          <NavLinkCustom to='/hero' name='Hero' />
        </div>
      </div>

      <div className='navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end'>
        <ul className='navbar-nav ml-auto'>
          {/* <NavLinkCustom to='/login' name='Logout' /> */}
          <span className='nav-item nav-link text-primary'>Pepe</span>
          <button type='button' onClick={handleLogout} className='btn btn-outline-primary nav-item nav-link'>LogOut</button>
        </ul>
      </div>
    </nav>
  )
}
