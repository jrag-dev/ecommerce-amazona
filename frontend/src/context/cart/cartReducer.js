import {
  AGREGAR_PRODUCTO_CARRITO, ELIMINAR_PRODUCTO_CARRITO
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
    default:
      return state
  }
}