import {
  AGREGAR_PRODUCTO_CARRITO
} from '../../types'

export default (state, action) => {
  switch (action.type) {
    case AGREGAR_PRODUCTO_CARRITO:

      let productoCarrito = action.payload.productoCarrito

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

      console.log(disponibleFn())

      const carritoItems = disponibleFn() 
        ? (
            existeProductoCarrito 
            ? state.carrito.carritoItems.map((item) => 
              item.productoCarrito._id === productoCarrito._id 
              ? { ...item, cantidad: item.cantidad + 1} 
              : item
            )
            : [...state.carrito.carritoItems, { productoCarrito, cantidad: 1}]
            ) 
        : [...state.carrito.carritoItems]

      return {
        ...state,
        carrito: {
          ...state.carrito,
          carritoItems
        }
      }
    default:
      return state
  }
}