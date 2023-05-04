import React from 'react'
import "./carousel.css"

function Carousel(props) {
  return (
    <div id="carouselExampleIndicators" className="carousel carousel-dark carousel-container slide">
  <div className="carousel-indicators">
    <button type="button btn" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item citem active">
      <img src={props.img1} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item citem">
      <img src={props.img2}  className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item citem">
      <img src={props.img3} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item citem">
      <img src={props.img4} className="d-block w-100" alt="..."/>
    </div>
    
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default Carousel
