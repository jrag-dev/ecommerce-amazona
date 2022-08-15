import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import ProductComponent from '../components/ProductComponent'

import ProductsContext from '../context/products/productsContext'
import data from '../data'

const HomePage = () => {

  const { productos, obtenerProductos } = useContext(ProductsContext)

  useEffect(() => {
    obtenerProductos()
  }, [])

  return (
    <section className="contenedor">
      <h1>Featured Products</h1>
      <article className="products">
        {
          productos.map(product => (
            <ProductComponent
              key={product.slug}
              product={product}
            />
          ))
        }
      </article>
    </section>
  )
}

export default HomePage