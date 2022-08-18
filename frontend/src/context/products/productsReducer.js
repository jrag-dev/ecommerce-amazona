import { 
  OBTENER_PRODUCTOS,
  OBTENER_PRODUCTOS_SUCCESS,
  OBTENER_PRODUCTOS_ERROR,
  OBTENER_PRODUCTO,
  OBTENER_PRODUCTO_SUCCESS,
  OBTENER_PRODUCTO_ERROR
} from "../../types";



export default (state, action) => {
  switch (action.type) {
    case OBTENER_PRODUCTO:
    case OBTENER_PRODUCTOS:
      return {
        ...state,
        loading: true
      }
    case OBTENER_PRODUCTOS_SUCCESS:
      return {
        ...state,
        productos: action.payload,
        loading: false,
        error: null
      }
    case OBTENER_PRODUCTOS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case OBTENER_PRODUCTO_SUCCESS:
      return {
        ...state,
        producto: action.payload,
        loading: false,
        error: null
      }
    case OBTENER_PRODUCTO_ERROR:
      return {
        ...state,
        producto: null,
        loading: false,
        error: action.payload
      }
    default:
      return state;
  }
}