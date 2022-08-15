import React, { useReducer } from 'react'
import clienteAxios from '../../config/axios'
import ProductsContext from './productsContext'
import productsReducer from './productsReducer'


import { OBTENER_PRODUCTOS } from '../../types'


const ProductsState = ({ children }) => {

  const initialState = {
    productos: [],
  }

  const [state, dispatch] = useReducer(productsReducer, initialState);

  // Funciones que cambiarán el state de productos

  const obtenerProductos = async () => {

    try {

      const respuesta = await clienteAxios.get('/products')

      dispatch({
        type: OBTENER_PRODUCTOS,
        payload: respuesta.data
      })
      
    } catch (error) {
      console.log(error)
    }
  }


  const datos = {
    productos: state.productos,
    obtenerProductos
  }

  return (
    <ProductsContext.Provider value={datos}>
      { children }
    </ProductsContext.Provider>
  )
}

export default ProductsState