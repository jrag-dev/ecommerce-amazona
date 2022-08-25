import React from 'react';
import { HashRouter, Routes, Route }  from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css'

import HeaderComponent from './components/HeaderComponent'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage';
import SigninPage from './pages/SigninPage';
import SignOutPage from './pages/SignOutPage';

import AuthState from './context/auth/authState';
import CartState from './context/cart/cartState';
import ProductsState from './context/products/productsState'

function App() {

  return (
    <HashRouter>
      <AuthState>
        <ProductsState>
          <CartState>
            <HelmetProvider>
              <div className="app">
                <ToastContainer position="bottom-center" limit={1}/>
                <header className="header">
                  <HeaderComponent/>
                </header>
                <main className="main">
                  <Routes>
                    <Route path="/cart" element={<CartPage/>}/>
                    <Route path="/product/slug/:slug" element={<ProductPage/>}/>
                    <Route path="/signin" element={<SigninPage/>}/>
                    <Route path="/signout" element={<SignOutPage/>}/>
                    <Route path="/" element={<HomePage/>}/>
                  </Routes>
                </main>
                {/* <footer>
                  <div className="footer">
                    Todos los derechos reservados 
                  </div>
                </footer> */}
              </div>
            </HelmetProvider>
          </CartState>
        </ProductsState>
      </AuthState>
    </HashRouter>
  )
}

export default App
