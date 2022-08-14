import { useState } from 'react'
import './App.css'
import data from './data'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <header>
        <a href="/">Amazona</a>
      </header>
      <main>
        <h1>Featured Products</h1>
        <article className="products">
          {
            data.products.map(product => (
              <div className="product" key={product.slug}>
                <a href={`/product/${product.slug}`}>
                  <img src={`${product.image}`} alt={`${product.name}`}/>
                </a>
                <div className="product__body">
                  <p className="product__name">{product.name}</p>
                  <p className="product__reviews">{product.numReviews} reviews</p>
                  <p className="product__price">
                    <strong>${product.price}</strong>
                  </p>
                  <div className="product__card">
                    <button 
                      className="product__button"
                    >Add to Card</button>
                  </div>
                </div>
              </div>
            ))
          }
        </article>
        
      </main>
    </div>
  )
}

export default App
