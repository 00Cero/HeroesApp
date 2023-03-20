import { Outlet } from 'react-router-dom'
import { Navbar } from './ui/components/Navbar'
import 'animate.css'
import { AuthProvider } from './auth/context/AuthProvider'

export const HeroesApp = () => {
  return (
    <AuthProvider>
      <Navbar />
      <hr />
      <div className='container-lg'>
        <Outlet />
      </div>
    </AuthProvider>
  )
}
