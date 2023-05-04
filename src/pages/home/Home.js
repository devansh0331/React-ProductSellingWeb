import React from 'react'
import './Home.css'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Heart from '../../img/heart.png'
import Cart from '../../img/cart.png'
import { Outlet, Link } from "react-router-dom"

import Sample from '../../img/detector.png'
import Fire from '../../img/flames.png'
import TeamCard from '../../assets/teamCard/TeamCard'
// import { default as Fade } from 'react-fade'

//Image Imports
import Ayan from "../../img/AyanCrop.jpg"
import Saumya from "../../img/SaumyaCrop.jpg"
import Wise from "../../img/Wise.jpg"
import Hashiba from "../../img/Hashiba.jpg"
import Product from "../../img/productFinal.png"



function Home() {
  return (
    <>
   
      <Navbar/>
      <Header/>
      <section className="">
        <h1>Hello World</h1>
      </section>

    <section id="Product" className="product">

        <span> <img src={Fire} alt="Fire Image"/>Fire Haltt</span>
        <div className="product-info">
            
        <img src={Product} alt="Product Image"/>

       
           <div className="product-desc-para">
            <span>About the Product</span>
<p>             Our product provide a gas detect sensor along with fire detect sensor. If gas leakage occurs then our device stops the gas flow from cylinder to protect further gas to leak and at the same time it cuts offs the electricity connection for this gas to not catch fire. It also have connectivity with wifi so the user can get message of its gas leakage at their home from our app and fire brigade will also get notification if fire and gas leakage doesn't stops.            </p>
            <div className="product-icons">
                
            <img src={Cart} alt="" />
            <img src={Heart} alt="" />
            <div className="details-btn"> <Link to="/productDescription"> Details</Link></div>
            </div>
            {/* <img src= alt="" /> */}
        </div>
        
        </div>
    </section>
    


    <section id="OurTeam" className="product our-team">
    <span>| Our Team</span>
    <div className="team-card">
        <div className="col-3 card-indi">
            
    <TeamCard profile={Ayan} memberName="Ayan Paliwal "/>
        </div>
        <div className="col-3">
            
    <TeamCard profile={Saumya} memberName="Soumya Upadhyay"/>
        </div>
        <div className="col-3">
            
    <TeamCard profile={Wise} memberName="Wise Khan"/>
        </div>
        <div className="col-3">
            
    <TeamCard profile={Hashiba} memberName="Hashiba Aman"/>
        </div>
       
    {/* <TeamCard/> */}
    

    </div>
    
    </section>

    <section id="contact">
        
    <Footer/>
    </section>
    </>
  )
}

export default Home
