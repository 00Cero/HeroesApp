import { useReducer } from 'react'
import { types } from '../types/types'
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer'

const init = () => {
  const user = JSON.parse(window.localStorage.getItem('user'))

  return {
    logged: !!user,
    user
  }
}

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {}, init)

  const login = () => {
    const user = {
      id: '123',
      name: 'Emanuel'
    }

    window.localStorage.setItem('user', JSON.stringify(user))

    dispatch({
      type: types.login,
      payload: user
    })
  }

  const logout = () => {
    dispatch({
      type: types.logout
    })
  }

  return (
    <AuthContext.Provider value={{ state, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
