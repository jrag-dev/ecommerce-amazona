import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import NavDropdown from 'react-bootstrap/NavDropdown';
import LinkContainer from 'react-bootstrap/NavDropdown';

import AuthContext from '../context/auth/authContext'
import CartContext from '../context/cart/cartContext'



const HeaderComponent = () => {

  // const navigate = useNavigate()

  const { carrito } = useContext(CartContext)
  const { user, signoutFn } = useContext(AuthContext)


  const signoutHandler = () => {
    signoutFn()
    window.location.href = '/signin';
  }

  return (
    <div className="contenedor">
      <div className="header__nav-principal">
        <Link to="/">Amazona</Link>
        <nav>
          <ul className="header__nav-secundaria">
            <li className="card_position">
              <Link className="cart-nav" to="/cart">Cart</Link>
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
