import React, { useReducer } from 'react'
import OrdersContext from './ordersContext'

import ordersReducer from './ordersReducer'

import clienteAxios from '../../config/axios'

import { GUARDAR_ORDER_ACTUAL, GUARDAR_SHIPPING_ADDRESS } from '../../types'


const OrdersState = ({ children}) => {

  const initialState = {
    order : {}
  }

  const [state, dispatch] = useReducer(ordersReducer, initialState)

  // TODO: funciones que cambian el state

  // Función que permite obtoner la order por su id
  const getOrder = async (orderId, token) => {
    try {
      const respuesta = await clienteAxios.get(`/orders/${orderId}`, 
        {
          headers: {
            authorization: `Bearer ${token}` 
          }
        }
      );

      console.log(respuesta.data)
      dispatch({
        type: GUARDAR_ORDER_ACTUAL,
        payload: respuesta.data
      })

    } catch (error) {
      console.log(error)
    }
  }

  const datos = {
    order: state.order,
    getOrder
  }

  return (
    <OrdersContext.Provider value={datos}>
      { children }
    </OrdersContext.Provider>
  )
}

export default OrdersState