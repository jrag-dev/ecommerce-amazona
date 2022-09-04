import { GUARDAR_ORDER_ACTUAL } from "../../types"




export default (state, action) => {
  switch (action.type) {
    case GUARDAR_ORDER_ACTUAL:
      return {
        ...state,
        order: action.payload.order
      }
    default:
      return state
  }
}