import React, { useEffect } from 'react'
import { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai'
import { MdDeleteForever } from "react-icons/md";

import CartContext from '../context/cart/cartContext'
import CheckoutSteps from '../components/CheckoutSteps';
import AuthContext from '../context/auth/authContext';
import { Link, useNavigate } from 'react-router-dom';



const PlaceOrderPage = () => {

  const navigate = useNavigate()

  const { carrito } = useContext(CartContext)
  const { carritoItems, total, shippingAddress, paymentMethod } = carrito
  const { user } = useContext(AuthContext)

  useEffect(() => {
    if (!paymentMethod) {
      navigate('/payment')
    }
  }, [navigate])

  
  const shipping = 0.00;
  
  const tax = total*0.12;
  
  const ordertotal = total + tax;

  console.log(total + tax)
  
  console.log( typeof total)
  console.log( typeof tax)
  console.log( typeof shipping)
  
  return (
    <div className="placeorder contenedor">
      <Helmet>
        <title>Amazona | Payment Method</title>
      </Helmet>

      <CheckoutSteps step1="step1" step2="step2" step3="step3" step4="step4"></CheckoutSteps>

      <h2>Payment Method</h2>

      <div className="placeorder__grid">
        <div className="placeorder__shipping">
          <h3>Shipping</h3>
          <p><span>Name:</span>{shippingAddress.name}</p>
          <p><span>Address:</span>{`${shippingAddress.code}, ${shippingAddress.address}, ${shippingAddress.city}, ${shippingAddress.country}`}</p>
          <Link to='/shipping'>Editar</Link>
        </div>

        <div className="placeorder__payment">
          <h3>Payment</h3>
          <p><span>Method:</span>{paymentMethod}</p>
          <Link to="/payment">Editar</Link>
        </div>

        <div className="placeorder__resumen">
          <h3>Order Summary</h3>
          <div className="resumen__row">
            <p>Items:</p>
            <p>$ {total.toFixed(2)}</p>
          </div>
          <div className="resumen__row">
            <p>Shipping:</p>
            <p>$ {shipping.toFixed(2)}</p>
          </div>
          <div className="resumen__row">
            <p>Tax:</p>
            <p>$ {tax.toFixed(2)}</p>
          </div>
          <div className="resumen__row">
            <p>Orden Total:</p>
            <p>$ {ordertotal}</p>
          </div>
          <button>Place Order</button>
        </div>

        <div className="placeorder_products">
          {
            carritoItems.map(({_id, productoCarrito, cantidad }) => (
              <div className="cart__item" key={_id}>
                <div className="cart__item-img">
                  <img src={`${productoCarrito.image}`} alt={`${productoCarrito.name}`}/>
                </div>
                <div className="cart__item-name">
                  <p><Link to={`/product/slug/${productoCarrito.slug}`}>{productoCarrito.name}</Link></p>
                </div>
                <div className="cart__item-cantidad">

                  <p>{cantidad}</p>

                </div>
                <div className="cart__item-precio">
                  <p>${productoCarrito.price}</p>
                </div>
                <div className="cart__item-eliminar">
                  <Link to="/cart">Editar</Link>
                </div>
              </div>
            ))
          }
        </div>

      </div>


    </div>
  )
}

export default PlaceOrderPage