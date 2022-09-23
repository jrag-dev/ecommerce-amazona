import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { Helmet } from 'react-helmet-async';
import LoaderComponent from '../components/LoaderComponent';

import ProductComponent from '../components/ProductComponent'

import ProductsContext from '../context/products/productsContext'
import data from '../data'

const HomePage = () => {

  const { productos, productsSearch, loading, error, obtenerProductos } = useContext(ProductsContext)

  useEffect(() => {
    obtenerProductos()
  }, [])

  return (
    <section className="contenedor">
      <Helmet>
        <title>Amazona | Home</title>
      </Helmet>
      { !loading && <h1>Featured Products</h1>}
      <article className="products">
        {
          loading
            ? (
              <div className="centrado">
                <LoaderComponent/>
              </div>
            )
            : error ? (
              error === 'Producto no encontrado'
              ? ( 
                <>
                  <div className="error__search">{error}</div>
                  {                  
                    productos.map(product => (
                      <ProductComponent
                        key={product.slug}
                        product={product}
                      />
                    ))
                  }
                </>
              ) : (
                <div>Error</div>
              )
            )
            : productsSearch.length > 0 ? (
              productsSearch.map(product => (
                <ProductComponent
                  key={product.slug}
                  product={product}
                />
              ))
            )
            : (
              productos.map(product => (
                <ProductComponent
                  key={product.slug}
                  product={product}
                />
              ))
            )
        }
      </article>
    </section>
  )
}

export default HomePage