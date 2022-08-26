import { CERRAR_SESION, LOGIN_ERROR, LOGIN_EXITOSO } from "../../types";




export default (state, action) => {
  switch (action.type) {
    case LOGIN_EXITOSO:
      localStorage.setItem('token', action.payload.token)
      localStorage.setItem('user', JSON.stringify(action.payload.user))
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        error: null,
        cargando: false
      }
    case LOGIN_ERROR:
      console.log('reducer error', action.payload)
      return {
        ...state,
        token: null,
        user: null,
        error: action.payload,
        cargando: false
      }
    case CERRAR_SESION:
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      localStorage.removeItem('shippingAddress')
      localStorage.removeItem('carritoItems')
      return {
        ...state,
        token: null,
        user: null,
        error: null,
        cargando: false,
        carrito: {
          carritoItems: [],
          shippingAddress: {},
        }
      }
    default:
      return state;
  }
}