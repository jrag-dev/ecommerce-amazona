import React, { useContext } from 'react'
import CartItemComponent from '../components/CartItemComponent'
import CartContext from '../context/cart/cartContext'


const CartPage = () => {

  const { carrito } = useContext(CartContext)

  carrito.carritoItems.map(item => (
    console.log(item.productoCarrito.price)
  ))

  const totalCarrito = (arr) => {
    const carritoItem = arr.reduce((acc, item) => acc + item.cantidad, 0)
    const total = arr.reduce((acc, item) => acc + item.productoCarrito.price*item.cantidad, 0)
    return {
      carritoItem,
      total
    }
  }


  return (
    <article className="cart-page">
      <h2 className="cart-page-h2">Carrito de Compras</h2>
      <div className="cart__items">
        {
          carrito.carritoItems.map(carritoItem => (
            <CartItemComponent
              key={carritoItem.productoCarrito._id}
              carritoItem={carritoItem}
            />
          ))
        }
      </div>
      <div className="cart__total">
        <p>
          Subtotal ({totalCarrito(carrito.carritoItems).carritoItem} items): $
          {
            totalCarrito(carrito.carritoItems).total
          }
        </p>
        <button>Proceder a Checkout</button>
      </div>
    </article>
  )
}

export default CartPage