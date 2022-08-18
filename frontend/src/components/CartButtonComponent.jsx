import React, { useContext } from 'react'
import CartContext from '../context/cart/cartContext'

const CartButtonComponent = ({ producto }) => {

  const { addCarrito } = useContext(CartContext)

  return (
    <button 
      className="product__button"
      onClick={() => addCarrito(producto._id)}
    >Add to Card</button>
  )
}

export default CartButtonComponent
