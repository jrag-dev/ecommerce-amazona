import { useState } from 'react'
import { HashRouter, Routes, Route }  from 'react-router-dom'

import './App.css'
import HeaderComponent from './components/HeaderComponent'
import ProductsState from './context/products/productsState'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <HashRouter>
      <ProductsState>
        <header>
          <HeaderComponent/>
        </header>
        <main>
          <Routes>
            <Route path="/product/:slug" element={<ProductPage/>}/>
            <Route path="/" element={<HomePage/>}/>
          </Routes>
        </main>
      </ProductsState>
    </HashRouter>
  )
}

export default App
