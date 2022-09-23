import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import ProductsContext from '../context/products/productsContext'

import './SidebarComponent.css';


const SidebarComponent = ({ widthScreen, openMenu, setOpenMenu }) => {

  const { categories } = useContext(ProductsContext)

  const handleClick = () => {
    setOpenMenu(!openMenu)
  }


  return (
    <aside className="sidebar activo">
      <div className="categorias">
        <h3>Category</h3>
        <p>Shirt</p>
        <p>Weight</p>
        <p>Pants</p>
      </div>
    </aside>
  )
}

export default SidebarComponent