import React from 'react';
import { HashRouter, Routes, Route }  from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

import './App.css'

import HeaderComponent from './components/HeaderComponent'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage';
import SigninPage from './pages/SigninPage';
import ShippingAddressPage from './pages/ShippingAddressPage';
import SignUpPage from './pages/SignUpPage';

import AuthState from './context/auth/authState';
import CartState from './context/cart/cartState';
import ProductsState from './context/products/productsState'
import PaymentMethodPage from './pages/PaymentMethodPage';
import PlaceOrderPage from './pages/PlaceOrderPage';
import OrderPage from './pages/OrderPage';
import OrdersState from './context/orders/ordersState';

function App() {

  return (
    <HashRouter>
      <AuthState>
        <ProductsState>
          <CartState>
            <OrdersState>
              <HelmetProvider>
                <PayPalScriptProvider deferLoading={true}>

                  <div className="app">
                    <ToastContainer position="bottom-center" limit={1}/>
                    <header className="header">
                      <HeaderComponent/>
                    </header>
                    <main className="main">
                      <Routes>
                        <Route path="/order/:id" element={<OrderPage/>}/>
                        <Route path="/placeorder" element={<PlaceOrderPage/>}/>
                        <Route path="/payment" element={<PaymentMethodPage/>}/>
                        <Route path="/shipping" element={<ShippingAddressPage/>}/>
                        <Route path="/cart" element={<CartPage/>}/>
                        <Route path="/product/slug/:slug" element={<ProductPage/>}/>
                        <Route path="/signin" element={<SigninPage/>}/>
                        <Route path="/signup" element={<SignUpPage/>}/>
                        <Route path="/" element={<HomePage/>}/>
                      </Routes>
                    </main>
                    {/* <footer>
                      <div className="footer">
                        Todos los derechos reservados 
                      </div>
                    </footer> */}
                  </div>
                </PayPalScriptProvider>
              </HelmetProvider>
            </OrdersState>
          </CartState>
        </ProductsState>
      </AuthState>
    </HashRouter>
  )
}

export default App
