import { useNavigate } from 'react-router-dom'

export const LoginPage = () => {
  const navigate = useNavigate()
  const handleLogin = () => {
    console.log('login')
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
