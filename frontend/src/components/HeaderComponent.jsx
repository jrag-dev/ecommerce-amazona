import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../context/cart/cartContext'



const HeaderComponent = () => {

  const { carrito } = useContext(CartContext)

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
              <button>Logout</button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default HeaderComponent
