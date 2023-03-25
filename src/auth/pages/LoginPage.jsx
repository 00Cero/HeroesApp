import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export const LoginPage = () => {
  const navigate = useNavigate()
  const { login } = useContext(AuthContext)

  const handleLogin = () => {
    login()
    navigate('/', {
      replace: true
    })
  }
  return (
    <div className='container-lg'>
      <h1>Login</h1>
      <hr />
      <button
        type='button' className='btn btn-primary'
        onClick={handleLogin}
      >Login
      </button>
    </div>
  )
}
