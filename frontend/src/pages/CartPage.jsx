import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async';
import { AiOutlineLeft } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';

import CartItemComponent from '../components/CartItemComponent'
import CartContext from '../context/cart/cartContext'


const CartPage = () => {

  let navigate = useNavigate()

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

  const handlerCheckout = () => {
    navigate('/signin?redirect=/shipping')
  }

  return (
    <article className="cart-page">

      <Helmet>
        <title>{`Amazona | carrito-compras`}</title>
      </Helmet>

      {
        carrito.carritoItems.length !== 0 && (
          <div className="contenedor_link">
            <Link className="link_button" to="/"><AiOutlineLeft className="link_button-svg" color="#FFF" size="20px"/>Volver</Link>
          </div>
        )
      }

      <h2 className="cart-page-h2">Carrito de Compras</h2>

      {
        carrito.carritoItems.length === 0 
          ? (
            <div className="cart__vacio">
              <p className="cart__vacio-p">El carrito está vacío!</p>
              <Link className="cart__vacio-link" to="/">Ir al area de ventas</Link>
            </div>
          )
          : (
            <>
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
                <button
                  type="button"
                  onClick={() => handlerCheckout()}
                >Proceder a Checkout</button>
              </div>
            </>
          )
      }
    </article>
  )
}

export default CartPage