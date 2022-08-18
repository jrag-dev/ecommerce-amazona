import React, { useReducer } from 'react'
import logger from 'use-reducer-logger';

import clienteAxios from '../../config/axios'
import ProductsContext from './productsContext'
import productsReducer from './productsReducer'


import { 
  OBTENER_PRODUCTOS,
  OBTENER_PRODUCTOS_SUCCESS,
  OBTENER_PRODUCTOS_ERROR,
  OBTENER_PRODUCTO,
  OBTENER_PRODUCTO_SUCCESS,
  OBTENER_PRODUCTO_ERROR
} from "../../types";


const ProductsState = ({ children }) => {

  const initialState = {
    productos: [],
    producto: null,
    loading: false,
    error: null
  }

  const [state, dispatch] = useReducer(
    import.meta.env.VITE_NODE_ENV === 'development' ? logger(productsReducer) : productsReducer,
    initialState
  );

  // Funciones que cambiarán el state de productos

  const obtenerProductos = async () => {

    dispatch({
      type: OBTENER_PRODUCTOS,
    })

    try {
      const respuesta = await clienteAxios.get('/products')

      dispatch({
        type: OBTENER_PRODUCTOS_SUCCESS,
        payload: respuesta.data
      })
      
    } catch (error) {
      console.log(error)
      dispatch({
        type: OBTENER_PRODUCTOS_ERROR,
        payload: true
      })
    }
  }

  const obtenerProducto = async (slug) => {

    dispatch({
      type: OBTENER_PRODUCTO,
    })

    try {
      const respuesta = await clienteAxios.get(`/products/slug/${slug}`)

      console.log(respuesta.data)
      dispatch({
        type: OBTENER_PRODUCTO_SUCCESS,
        payload: respuesta.data
      })

    } catch (error) {
      console.log(error.response.data.message)
      dispatch({
        type: OBTENER_PRODUCTO_ERROR,
        payload: error.response.data.message
      })
    }
  }


  const datos = {
    productos: state.productos,
    producto: state.producto,
    loading: state.loading,
    error: state.error,
    obtenerProductos,
    obtenerProducto
  }

  return (
    <ProductsContext.Provider value={datos}>
      { children }
    </ProductsContext.Provider>
  )
}

export default ProductsState