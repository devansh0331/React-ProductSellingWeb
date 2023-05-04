import React from 'react'
import './Footer.css'
import Logo from '../../img/logo.png'

import { Outlet, Link } from "react-router-dom"

function Footer() {

    const handlOnClick = () => {

    }

  return (
    <>
        <footer className="footer-distributed">

<div className="footer-left">

    <img src={Logo} alt="Logo"/>
    <h3>Fire Squall - <span>logo</span></h3>

    <p className="footer-links">
        <a href="#Product">Product</a>
        ·
        <a href="#">Our Team</a>
        
        ·
        <Link to="/productDescription">Product description</Link>
        
        ·
        <a href="#contact">Contact</a>
    </p>

    <p className="footer-company-name">Fire Squall © 2023</p>

    <div className="footer-icons">

        {/* <a href="#"><i className="fa fa-facebook"></i></a>
        <a href="#"><i className="fa fa-twitter"></i></a>
        <a href="#"><i className="fa fa-linkedin"></i></a>
        <a href="#"><i className="fa fa-github"></i></a> */}

    </div>

</div>

<div className="footer-right">

    <p>Contact Us</p>

    <form action="#" method="post">

        <input type="text" name="email" placeholder="Email"/>
        <textarea name="message" placeholder="Message"></textarea>
        <button type="Submit" onClick={handlOnClick}>Send</button>

    </form>

</div>

</footer>
    </>
  )
}

export default Footer
