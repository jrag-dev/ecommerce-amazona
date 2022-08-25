import React, { useReducer } from 'react'
import clienteAxios from '../../config/axios'
import { CERRAR_SESION, LOGIN_ERROR, LOGIN_EXITOSO } from '../../types'
import AuthContext from './authContext'
import authReducer from './authReducer'

const AuthState = ({ children }) => {

  const initialState = {
    token: localStorage.getItem('token') ? localStorage.getItem('token') : null,
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
    error: null,
    cargando: true,
  }

  const [state, dispatch] = useReducer(authReducer, initialState)

  // Funciones que cambiaran el state

  const signinFn = async (data) => {
    try {
      const respuesta = await clienteAxios.post('/users/signin', data)
      dispatch({
        type: LOGIN_EXITOSO,
        payload: respuesta.data
      })
      console.log('state sucess', respuesta.data)
    } catch (error) {
      dispatch({
        type: LOGIN_ERROR,
        payload: error.response.data.message
      })
      console.log('state error', error)
    }
  }

  const signoutFn = () => {
    dispatch({
      type: CERRAR_SESION
    })
  }

  const datos = {
    token: state.token,
    user: state.user,
    error: state.error,
    cargando: state.cargando,
    signinFn,
    signoutFn
  }

  return (
    <AuthContext.Provider value={datos}>
      { children }
    </AuthContext.Provider>
  )
}

export default AuthState
