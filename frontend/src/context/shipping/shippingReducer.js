



export default (state, action) => {
  switch (action.type) {
    case GUARDAR_SHIPPING_ADDRESS:
      return {
        ...state,
        carrito: {
          ...state.carrito,
          shipping
        }
      }
    default:
      return state
  }
}