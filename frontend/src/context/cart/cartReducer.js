import {
  AGREGAR_PRODUCTO_CARRITO, CALCULAR_TOTAL_CARRITO, CREATE_ORDER, ELIMINAR_PRODUCTO_CARRITO, GUARDAR_METODO_PAGO, GUARDAR_SHIPPING_ADDRESS
} from '../../types'

export default (state, action) => {
  switch (action.type) {
    case AGREGAR_PRODUCTO_CARRITO:

      let productoCarrito = action.payload.productoCarrito
      let cantidadCarrito = action.payload.cantidad || 1

      let existeProductoCarrito = state.carrito.carritoItems.find(
        (item) => item.productoCarrito._id === productoCarrito._id
      )
      
      const disponibleFn = () => {
        let disponible = true

        if (productoCarrito.countInStock === 0) {
          disponible = false
        }

        return disponible
      }

      let carritoItems = disponibleFn() 
        ? (
            existeProductoCarrito 
            ? state.carrito.carritoItems.map((item) => 
              item.productoCarrito._id === productoCarrito._id 
              ? existeProductoCarrito.cantidad <= cantidadCarrito
                ? existeProductoCarrito.cantidad === cantidadCarrito
                  ? { ...item, cantidad: item.cantidad }
                  : { ...item, cantidad: item.cantidad + 1} 
                : { ...item, cantidad: item.cantidad - 1} 
              : item
            )
            : [...state.carrito.carritoItems, { productoCarrito, cantidad: 1}]
          ) 
        : existeProductoCarrito?.countInStock > 0
          ? [...state.carrito.carritoItems, { productoCarrito, cantidad: 1}]
          : [...state.carrito.carritoItems]

      localStorage.setItem('carritoItems', JSON.stringify(carritoItems))

      return {
        ...state,
        carrito: {
          ...state.carrito,
          carritoItems
        }
      }
    case CALCULAR_TOTAL_CARRITO:
      localStorage.setItem('total', action.payload)
      return {
        ...state,
        carrito: {
          ...state.carrito,
          total: action.payload
        }
      }
    case ELIMINAR_PRODUCTO_CARRITO:
      let producto = action.payload

      let buscarProductoCarrito = state.carrito.carritoItems.find(
        (item) => item.productoCarrito._id === producto._id
      )

      let carritoItem = buscarProductoCarrito
        ? (
          state.carrito.carritoItems.filter(
            item => item.productoCarrito._id !== producto._id
          )
        )
        : [...state.carrito.carritoItems]
      
      localStorage.setItem('carritoItems', JSON.stringify(carritoItem))

      return {
        ...state,
        carrito: {
          carritoItems: carritoItem
        }
      }
    
    case GUARDAR_SHIPPING_ADDRESS:
      localStorage.setItem('shippingAddress', JSON.stringify(action.payload))
      return {
        ...state,
        carrito: {
          ...state.carrito,
          shippingAddress: action.payload,
        }
      }
    
    case GUARDAR_METODO_PAGO:
      localStorage.setItem('paymentMethod', action.payload)
      return {
        ...state,
        carrito: {
          ...state.carrito,
          paymentMethod: action.payload
        }
      }
    case CREATE_ORDER:
      localStorage.removeItem('shippingAddress')
      localStorage.removeItem('carritoItems')
      localStorage.removeItem('paymentMethod')
      return {
        ...state,
        order: action.payload.order,
        carrito: {
          carritoItems: [],
          shippingAddress: {},
          paymentMethod: '',
          shippingPrice: 0,
          totalPrice: 0
        }
      }
    default:
      return state
  }
}
