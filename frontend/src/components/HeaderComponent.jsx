import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import NavDropdown from 'react-bootstrap/NavDropdown';
import LinkContainer from 'react-bootstrap/NavDropdown';
import { FaShoppingCart } from "react-icons/fa";

import AuthContext from '../context/auth/authContext'
import CartContext from '../context/cart/cartContext'
import SearchProductComponent from './SearchProductComponent';
import SearchComponent from './SearchComponent';



const HeaderComponent = ({ openSidebar, openSidebarFn }) => {

  // const navigate = useNavigate()

  const { carrito } = useContext(CartContext)
  const { user, signoutFn } = useContext(AuthContext)


  const signoutHandler = () => {
    signoutFn()
    window.location.href = '/signin';
  }

  const openClickSidebar = () => {
    openSidebarFn()
  }

  return (
    <div className="contenedor">
      <div className="header__nav-principal">
        <Link to="/" className="titulo">Amazona</Link>
        <button onClick={() => openClickSidebar()} className="btn-categorias">Categorias<div className="caret"></div>
</button>
        <SearchComponent/>
        <nav>
          <ul className="header__nav-secundaria">
            <li className="card_position">
              <Link className="cart-nav" to="/cart"><FaShoppingCart/>Cart</Link>
                { 
                  carrito.carritoItems.length > 0 
                  ? (
                    <div className="cart__numbers">
                      {carrito.carritoItems.reduce((acc, item) => acc + item.cantidad, 0)}
                    </div>
                  )
                  : null
                }
            </li>
            <li>
              {
                user 
                ? (
                  <div className="dropdown">
                    <div className="select">
                      <Link className="selected" to="/">{user.name.split(' ')[0]}</Link>
                      <div className="caret"></div>
                    </div>
                    <ul className="dropdown-content"> 
                      <li>
                        <Link to='/profile'>User Profile</Link>
                      </li>
                      <li>
                        <Link to='/orderhistory'>Order History</Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="#signout"
                          onClick={signoutHandler}
                        >Sign Out</Link>
                      </li>
                    </ul>
                  </div>
                )
                : ( 
                  <Link to="/signin">Sign in</Link>
                )
              }
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default HeaderComponent
