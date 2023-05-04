import React from 'react'
import './OfferCard.css'

function OfferCard(props) {
  return (
  
    <section className="offerCard">
        <span>{props.title}</span>
        <p>{props.description}</p>

</section>

  )
}


export default OfferCard
