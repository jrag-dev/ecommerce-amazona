import React from 'react'
import { Link } from 'react-router-dom'

import data from '../data'

const HomePage = () => {
  return (
    <section className="contenedor">
      <h1>Featured Products</h1>
      <article className="products">
        {
          data.products.map(product => (
            <div className="product" key={product.slug}>
              <Link to={`/product/${product.slug}`}>
                <img src={`${product.image}`} alt={`${product.name}`}/>
              </Link>
              <div className="product__body">
                <p className="product__name">{product.name}</p>
                <p className="product__reviews">{product.numReviews} reviews</p>
                <p className="product__price">
                  <strong>${product.price}</strong>
                </p>
                <div className="product__card">
                  <button 
                    className="product__button"
                  >Add to Card</button>
                </div>
              </div>
            </div>
          ))
        }
      </article>
    </section>
  )
}

export default HomePage