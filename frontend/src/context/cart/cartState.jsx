import React from 'react'
import { useReducer } from 'react'
import CartContext from './cartContext'
import cartReducer from './cartReducer'


import {
  AGREGAR_PRODUCTO_CARRITO, CALCULAR_TOTAL_CARRITO, ELIMINAR_PRODUCTO_CARRITO, GUARDAR_METODO_PAGO, GUARDAR_SHIPPING_ADDRESS, UPDATE_PRODUCTO_CARRITO
} from '../../types'
import clienteAxios from '../../config/axios'


const CartState = ({ children }) => {

  const initialState = {
    carrito: {
      carritoItems: localStorage.getItem('carritoItems') ? JSON.parse(localStorage.getItem('carritoItems')) : [],
      total: localStorage.getItem('total') ? JSON.parse(localStorage.getItem('total')) : 0,
      shippingAddress: localStorage.getItem('shippingAddress')
        ? JSON.parse(localStorage.getItem('shippingAddress'))
        : {},
      paymentMethod: localStorage.getItem('paymentMethod')
        ? localStorage.getItem('paymentMethod')
        : '',
    }
  }

  const [state, dispatch] = useReducer(cartReducer, initialState)


  // TODO: Funciones que cambiaran el state de carritos

  // Función que permite añadir productos al carrito
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

  // función que permite actualizar la cantidad del producto
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

  // funcion que permite eliminar un producto del carrito
  const deleteCartItem = async (producto) => {

    try {
      const respuesta = await clienteAxios.get(`/products/${producto._id}`)

      dispatch({
        type: ELIMINAR_PRODUCTO_CARRITO,
        payload: respuesta.data
      })

    } catch (error) {
      console.log(error)
    }
  }

  // añadiendo la funcionalidad de shipping address 
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

  // Función que permite guardar el método de pago
  const addPaymentMethod = (data) => {
    try {
      dispatch({
        type: GUARDAR_METODO_PAGO,
        payload: data
      })
    } catch (error) {
      /* handle error */
      console.log(error)
    }
  }

  const addTotal = (data) => {
    try {
      dispatch({
        type: CALCULAR_TOTAL_CARRITO,
        payload: data
      })
    } catch (error) {
      console.log(error)
    }
  }


  const datos = {
    carrito: state.carrito,
    addCarrito,
    addTotal,
    updateCantidadCart,
    deleteCartItem,
    addShippingData,
    addPaymentMethod
  }
  return (
    <CartContext.Provider value={datos}>
      { children }
    </CartContext.Provider>
  )
}

export default CartState
