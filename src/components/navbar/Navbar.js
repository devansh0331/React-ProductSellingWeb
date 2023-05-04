import React from 'react'
import Heart from '../../img/heart.png'
import Cart from '../../img/cart.png'
import Menu from '../../img/menu.png'
import Logo from '../../img/logo.png'
import { Outlet, Link } from "react-router-dom"
import './Navbar.css'



function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-container navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      {/* <nav className="navbar navbar-expand-lg bg-body-tertiary"> */}
  <div className="container-fluid">
      <Link className="navbar-brand" to="/"><img src={Logo} alt="Logo Image"/><strong>SyncVerse</strong></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse navbar-lists" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item navbar-lists-item">
            <Link className="nav-link active" aria-current="page" to="#"><img src={Cart} alt=""/></Link>
        </li>
        <li className="nav-item navbar-lists-item">
            <Link className="nav-link active" aria-current="page" to="#"><img src={Heart} alt=""/></Link>
        </li>
        <li className="nav-item navbar-lists-item">
            <Link className="nav-link active" aria-current="page" to="#"><img src={Menu} alt=""/></Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
<Outlet/>
    </div>
  )
}

export default Navbar
