import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import ProductsContext from '../context/products/productsContext'

import './SidebarComponent.css';


const SidebarComponent = () => {

  const { categories, searchProductCategory } = useContext(ProductsContext)

  const handleClick = (category) => {
    searchProductCategory(category)
  }


  return (
    <aside className="sidebar activo">
      <div className="categorias">
        <h3>Categories</h3>

        <button onClick={() => handleClick('all')} className="btn">
          <span>All</span>
        </button>
        {
          categories.map((category, index) => (
            <button key={index} onClick={() => handleClick(category)} className="btn">
              <span>{category}</span>
            </button>
          ))
        }
      </div>
    </aside>
  )
}

export default SidebarComponent