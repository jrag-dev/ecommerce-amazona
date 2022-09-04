import React, { useEffect } from 'react'
import { useContext } from 'react';
import { Helmet } from 'react-helmet-async'
import { Link, useParams } from "react-router-dom";

import LoaderComponent from '../components/LoaderComponent';
import AuthContext from '../context/auth/authContext';
import OrdersContext from '../context/orders/ordersContext';

const OrderPage = () => {

  const { id } = useParams()

  const { order, getOrder } = useContext(OrdersContext)
  const { token } = useContext(AuthContext)

  console.log(order)

  useEffect(() => {
    getOrder(id, token)
    console.log(id)
  }, [id])

  return (
    <div className="placeorder contenedor">
      <Helmet>
        <title>Amazona | Show new Order</title>
      </Helmet>

      {
        !order._id
          ? (
            <LoaderComponent/>
          )
          : (
            <>
              <h2>{`Order: ${order._id}`}</h2>

              <div className="placeorder__grid order">
                <div className="placeorder__shipping">
                  <h3>Shipping</h3>
                  <p><span>Name:</span>{order.shippingAddress.name}</p>
                  <p><span>Address:</span>{`${order.shippingAddress.code}, ${order.shippingAddress.address}, ${order.shippingAddress.city}, ${order.shippingAddress.country}`}</p>
                  
                  <p className="order__not">{order.isDelivered ? 'Delivered' : 'Not delivered'}</p>
                </div>
        
                <div className="placeorder__payment">
                  <h3>Payment</h3>
                  <p><span>Method:</span>{order.paymentMethod}</p>
                  <p className="order__not">{order.idPaid ? 'Paid' : 'Not Paid'}</p>
                </div>
        
                <div className="placeorder__resumen placeorder__resumen-order">
                  <h3>Order Summary</h3>
                  <div className="resumen__row">
                    <p>Items:</p>
                    <p>$ {order.itemsPrice.toFixed(2)}</p>
                  </div>
                  <div className="resumen__row">
                    <p>Shipping:</p>
                    <p>$ {order.shippingPrice.toFixed(2)}</p>
                  </div>
                  <div className="resumen__row">
                    <p>Tax:</p>
                    <p>$ {order.taxPrice.toFixed(2)}</p>
                  </div>
                  <div className="resumen__row resumen_total">
                    <p>Orden Total:</p>
                    <p>$ {order.totalPrice}</p>
                  </div>
                </div>
        
                <div className="placeorder_products">
                  {
                    order.orderItems.map((item) => (
                      <div className="cart__item" key={item._id}>
                        <div className="cart__item-img">
                          <img src={`${item.image}`} alt={`${item.name}`}/>
                        </div>
                        <div className="cart__item-name">
                          <p><Link to={`/product/slug/${item.slug}`}>{item.name}</Link></p>
                        </div>
                        <div className="cart__item-cantidad">
        
                          <p>{item.cantidad}</p>
        
                        </div>
                        <div className="cart__item-precio">
                          <p>${item.price}</p>
                        </div>
                      </div>
                    ))
                  }
                </div>
        
              </div>
            </>
          )
      }

    </div>
  )
}

export default OrderPage