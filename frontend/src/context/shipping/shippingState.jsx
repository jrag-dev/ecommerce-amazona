import React, { useReducer } from 'react'
import ShippingContext from './shippingContext'
import shippingReducer from './shippingReducer'

import { GUARDAR_SHIPPING_ADDRESS } from '../../types'

const ShippingState = ({ children}) => {

  const initialState = {
    shippingAddress : {}
  }

  const [state, dispatch] = useReducer(shippingReducer, initialState)

  // funciones que cambian el state

  const addShippingData = (data) => {
    try {
      dispatch({
        type: GUARDAR_SHIPPING_ADDRESS,
        payload: data
      })
    } catch (error) {
      console.log(error)
    }
  }

  const datos = {
    shippingAddress: state.shippingAddress,
    addShippingData
  }

  return (
    <ShippingContext.Provider value={datos}>
      { children }
    </ShippingContext.Provider>
  )
}

export default ShippingState