import React from "react";
import "./ProductDescription.css";

import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

//Importing Images
import rating from "../../img/rating2.png";
import shipped from "../../img/shipped.png";
import exchange from "../../img/exchange.png";
import security from "../../img/security.png";
import offer from "../../img/discount.png";
import Fire from "../../img/flames.png";
// import Fire from "../../img/flames.png";
import Product from "../../img/productFinal.png";
import Img1 from "../../img/cimg1.png";
import Img2 from "../../img/cimg2.png";
import Img3 from "../../img/cimg3.png";
import Dimg1 from "../../img/dimg1.png";
import Dimg2 from "../../img/dimg2.png";
import Dimg3 from "../../img/dimg3.png";
import Dimg4 from "../../img/dimg4.png";

//Importing Assets
import OfferCard from "../../assets/offerCard/OfferCard";
import Table from "../../assets/table/ProductTable";
import Carousel from "../../assets/imageCarousal/Carousel";

function ProductDescription() {
  return (
    <div>
      <Navbar />
      <section id="completeDesciption" className="product-description">
        <span>
          {" "}
          <img src={Fire} alt="Fire Image" />
          Fire Haltt
        </span>
        <div className="product-description-details">
          <div className="product-details">
            <span>
              {" "}
              Fire Haltt/Smart WiFi Gas Detector Security Alarm/Fire Detector
              Alarm/LED Digital Display/High Sensitivity LPG Leak Detector
              Alarm/Mobile-APP Control/Notification Alert
            </span>
            {/* <hr> */}
            {/* <div id="rating">
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
            </div> */}

            <span id="mrp">*Coming Soon*</span> <div id="prodMrp">
                MRP = Rs. ****/-
            </div>
            <hr
              style={{
                border: "2px solid black",
                height: 2,
                width: "100%",
              }}
            />

            <span id="spcial-offers">
              {" "}
              <img src={offer} id="offer" alt="" /> Special Offers
            </span>

            <div className="special-offers">
              <OfferCard title="Offer 1" description="Coming Soon" />
              <OfferCard title="Offer 2" description="Coming Soon" />
              <OfferCard title="Offer 3" description="Coming Soon" />
            </div>
            <hr
              style={{
                border: "2px solid black",
                height: 2,
                width: "100%",
              }}
            />
            <div className="facalities-div">
              <div className="shipped facalities">
                <img src={shipped} alt="" />
                <span>Fast Delivery</span>
              </div>
              <div className="shipped facalities">
                <img src={exchange} alt="" />
                <span>7 Days Replacement</span>
              </div>
              <div className="shipped facalities">
                <img src={security} alt="" />
                <span>1 Year Warrenty</span>
              </div>
            </div>
            <hr
              style={{
                border: "2px solid black",
                height: 2,
                width: "100%",
              }}
            />
            <span>| Features</span>
            <ul>
              <li>
                <strong>[Detectable Gas]:</strong>[Detectable Gas]: The natural
                gas leak detector detects the main deadly gases: Natural gas
                (Methane, butane, ethane, LNG, etc) and Propane (LPG or
                liquefied petroleum gas).
              </li>
              <li>
                <strong>[On-site Alarm and APP Remote Alarm]:</strong> This gas
                alarm can be connected with mobile phone APP in a wireless
                environment. After connection, you can always receive the
                information of the alarm when you go out and once the alarm
                occurs.
              </li>
              <li>
                <strong> [Installation Location]:</strong> This alarm has an
                long 6 foot power cord which allows you to install it in the
                exact ideal location in your house to allow for proper gas
                detection.{" "}
              </li>
              <li>
                <strong>[Stylish Appearance]:</strong> This newly released
                natural gas alarm is sleek and modern and has a beautiful LCD
                screen that will complement the style of your home or camper
                without detracting from your interior design.
              </li>
            </ul>
            <hr
              style={{
                border: "2px solid black",
                height: 2,
                width: "100%",
              }}
            />

            <span>| Specifications</span>
            <ul>
              <li>Power supply: Micro USB+5V/1A</li>
              <li>Consumption: &lt;200mA</li>
              <li>
                Detecting gas: Natural gas (CH4), LPG, Smoke, Alcohol, Propane,
                Hydrogen, Methane, CO
              </li>
              <li>Working Environment: Temperature: 20~55℃</li>
              <li>Sample: Diffusion</li>
              <li>Range: 0-100% LEL</li>
              <li>Alarm setting value: 6% LEL</li>
              <li>Tolerance: ±3% LEL</li>
              <li>Response time: ≤ 5 seconds</li>
              <li>Heat alarm value: 57℃</li>
              <li>Alarm volume: ≥70db</li>
              <li>
                Valve/manipulator drive output:12/300MA output for 15 seconds
              </li>
              <li>Warm-up time: ≤ 30 seconds</li>
              <li>Fire sensor life: 15 years</li>
              <li>Sensor life:10 years</li>
              <li>Wifi:2.4GHZ IEEE802.11b/g/n</li>
            </ul>
            <hr
              style={{
                border: "2px solid black",
                height: 2,
                width: "100%",
              }}
            />
          </div>

          <div className="product-image">
            <Carousel img1={Product} img2={Img3} img3={Img1} img4={Img2}/>
          </div>
        </div>
        {/* <section className="product-table"> */}
        <div className="product-table">
          <span>| Product Details</span>
          <div className="details-table">
            <Table />
          </div>
        </div>
        {/* </section> */}
      </section>
      <div className="down-image">
        <img src={Dimg1} alt=""/>
      <img src={Dimg2} alt=""/>
      <img src={Dimg3} alt=""/>
      <img src={Dimg4} alt=""/>
      <section id="contact">
        <Footer />
      </section>
        
          
        </div>
      </div>
  );
}

export default ProductDescription;
