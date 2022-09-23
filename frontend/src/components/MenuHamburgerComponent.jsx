import React, { useContext } from 'react'

const MenuHamburgerComponent = ({ widthScreen, openMenu, setOpenMenu }) => {

  const handleClick = () => {
    setOpenMenu(!openMenu)
  }

  return (
    <div>
      {
        widthScreen >= 768 ? (
          <div 
            className="hamburger"
            onClick={handleClick}
          >
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        ) : null
      }
    </div>
  )
}

export default MenuHamburgerComponent
