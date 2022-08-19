import React, { useContext, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async';
import { AiOutlineLeft } from "react-icons/ai";

import RatingComponent from '../components/RatingComponent'
import ProductsContext from '../context/products/productsContext'
import LoaderComponent from '../components/LoaderComponent';
import CartButtonComponent from '../components/CartButtonComponent';
import { useState } from 'react';

const ProductPage = () => {

  const { slug } = useParams()

  const { producto, loading, error, obtenerProducto } = useContext(ProductsContext)

  const [cantidad, setCantidad] = useState(1)

  useEffect(() => {
    obtenerProducto(slug)
  }, [slug])

  let cantidadCountInStock = []

  for (let i = 1; i <= producto?.countInStock; i++) {
    cantidadCountInStock.push(i)
  }


  const handleChange = e => {
    setCantidad(e.target.value)
  }

  return (
    <div className="contenedor producto">
      <Helmet>
        <title>{`Amazona | ${producto?.name}`}</title>
      </Helmet>

      {
        !error && (
          <div className="contenedor_link">
            <Link className="link_button" to="/"><AiOutlineLeft className="link_button-svg" color="#FFF" size="20px"/>Volver</Link>
          </div>
        )
      }

      {
        loading 
        ? (
          <div className="centrado">
            <LoaderComponent/>
          </div>
        )
        : error ? (
          <div className="error-producto">
            <p>{error}</p>
          </div>
        )
        : (
            producto && (
              <article className="product__detail">
                <div className="detail__img">
                  {/* <img src={producto.image} alt={producto.name} /> */}
                  <img src={`${producto.image}`} alt={`${producto.name}`}/> 
                </div>
                <div className="detail__body">
                  <p className="product__name">{producto.name}</p>
                  <div className="row">
                    <RatingComponent
                      rating={producto.rating}
                      numReviews={producto.numReviews}
                    />
                    <p className="product__reviews">{producto.numReviews} reviews</p>
                  </div>
                  <p className="product__price">
                    Price: ${producto.price}
                  </p>
                  <p className="product__description">
                    Description: {producto.description}
                  </p>
                </div>
                <div className="detail__status">
                  <p className="row">
                    <span>Precio:</span>
                    <span>${producto.price}</span>
                  </p>
                  <p className="row">
                    <span>Status:</span>
                    <span className={producto.status ? 'disponible' : 'disponible-false'}>
                      {producto.status ? 'Disponible' : 'No disponible'}
                    </span>
                  </p>
                  <div className="row">
                    <p>Cantidad: </p>
                    <select
                      onChange={handleChange}
                    >
                      {
                        cantidadCountInStock.map(item => (
                          <option value={Number(item)} key={item}>{item}</option>
                        ))
                      }
                    </select>
                  </div>
                  {
                    producto.countInStock > 0 && (
                      <CartButtonComponent
                        producto={producto}
                        cantidad={cantidad}
                        hola="Mundo"
                      />
                    )
                  }
                </div>
              </article>
            )
        )
      }
    </div>
  )
}

export default ProductPage
