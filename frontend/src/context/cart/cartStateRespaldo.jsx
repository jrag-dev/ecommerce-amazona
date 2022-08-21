import React from 'react'
import { useReducer } from 'react'
import CartContext from './cartContext'
import cartReducer from './cartReducer'


import {
  AGREGAR_PRODUCTO_CARRITO
} from '../../types'
import clienteAxios from '../../config/axios'


const CartState = ({ children }) => {

  const initialState = {
    carrito: {
      carritoItems: [],
    }
  }

  const [state, dispatch] = useReducer(cartReducer, initialState)


  // Funciones que cambiaran el state de carritos

  const addCarrito = async (productoId) => {
    try {

      const respuesta = await clienteAxios.get(`/products/${productoId}`)

      dispatch({
        type: AGREGAR_PRODUCTO_CARRITO,
        payload: {
          productoCarrito: respuesta.data,
        }
      })
    } catch (error) {
      console.log(error)
    }
  }

  const updateCantidadCart = async ( producto, cantidad ) => {

    try {
      const respuesta = await clienteAxios.get(`/products/${producto._id}`)

      dispatch({
        type: AGREGAR_PRODUCTO_CARRITO,
        payload: {
          productoCarrito: respuesta.data,
          cantidad: cantidad
        }
      })

    } catch (error) {
      console.log(error)
    }
  }

  const deleteCartItem = async (producto) => {

    console.log('delete item: ', producto._id)
  }

  const datos = {
    carrito: state.carrito,
    addCarrito,
    updateCantidadCart,
    deleteCartItem
  }
  return (
    <CartContext.Provider value={datos}>
      { children }
    </CartContext.Provider>
  )
}

export default CartState