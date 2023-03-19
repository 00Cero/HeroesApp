import { Outlet } from 'react-router-dom'
import { Navbar } from './ui/components/Navbar'
import 'animate.css'

export const HeroesApp = () => {
  return (
    <>
      <Navbar />
      <hr />
      <div className='container-lg'>
        <Outlet />
      </div>
    </>
  )
}
