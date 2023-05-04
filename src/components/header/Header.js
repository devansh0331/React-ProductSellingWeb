import React from 'react'
import { Outlet, Link } from "react-router-dom"

import "./Header.css"

function Header() {
  return (
    <div>
<nav className="navbar   navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav myhead">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#Product">Product</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#OurTeam">Our Team</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#contact">Contact</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
{/* <outlet/> */}
    </div>
  )
}

export default Header
