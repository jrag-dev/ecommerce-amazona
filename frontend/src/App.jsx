import React from 'react';
import { HashRouter, Routes, Route }  from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async';

import './App.css'
import HeaderComponent from './components/HeaderComponent'
import ProductsState from './context/products/productsState'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import CartState from './context/cart/cartState';

function App() {

  return (
    <HashRouter>
      <ProductsState>
        <CartState>
          <HelmetProvider>
            <div className="app">
              <header className="header">
                <HeaderComponent/>
              </header>
              <main className="main">
                <Routes>
                  <Route path="/product/slug/:slug" element={<ProductPage/>}/>
                  <Route path="/" element={<HomePage/>}/>
                </Routes>
              </main>
              <footer>
                <div className="footer">
                  Todos los derechos reservados 
                </div>
              </footer>
            </div>
          </HelmetProvider>
        </CartState>
      </ProductsState>
    </HashRouter>
  )
}

export default App
