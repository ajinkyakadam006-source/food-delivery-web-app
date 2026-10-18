import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { TiShoppingCart } from "react-icons/ti"
import CartSideBar from '../CartSidebar/CartSidebar';
import './Navbar.css'

const Navbar = ({ cart, setCart }) => {
  const [show, setShow] = useState(false)

  return (
    <div className="mainContainer">
      <nav>

        <div className="logo">
          <div className="foodLogo">🍔</div>
          <div className="logoName">Food Plaza</div>
        </div>

        <ul className="listItems">
          <li><Link to="/">Home</Link></li>

          <li><Link to="/about">About</Link></li>

          <li><Link to="/contact">Contact</Link></li>

          <li><button className="cartBtn" onClick={() => setShow(true)}><TiShoppingCart />
            <span>{cart.length}</span></button></li>
        </ul>

      </nav>

      {show && (<CartSideBar show={show}
       cart={cart} setCart={setCart} setShow={setShow} />
      )}

    </div>
  )
}

export default Navbar