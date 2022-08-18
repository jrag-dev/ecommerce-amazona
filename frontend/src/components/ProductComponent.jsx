import React from 'react'
import { Link } from 'react-router-dom'
import RatingComponent from './RatingComponent'
import CartButtonComponent from '../components/CartButtonComponent'

const ProductComponent = ({ product }) => {
  
  return (
    <div className="product">
      <Link to={`/product/slug/${product.slug}`}>
        <img src={`${product.image}`} alt={`${product.name}`}/>
      </Link>
      <div className="product__body">
        <p className="product__name">{product.name}</p>
        <div className="row">
          <RatingComponent
            rating={product.rating}
            numReviews={product.numReviews}
          />
          <p className="product__reviews">{product.numReviews} reviews</p>
        </div>
        <p className="product__price">
          <strong>${product.price}</strong>
        </p>
        <div className="product__card">
          <CartButtonComponent
            producto={product}
          />
        </div>
      </div>
    </div>
  )
}

export default ProductComponent