import React from 'react'
import { Link } from 'react-router-dom'

const ProductComponent = ({ product }) => {
  
  return (
    <div className="product">
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
  )
}

export default ProductComponent