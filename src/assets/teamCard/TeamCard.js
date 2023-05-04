import React from 'react'
import './TeamCard.css'

function TeamCard(props) {
  return (
    <div>
      {/* <div className="responsive-container-block container">
  <p className="text-blk team-head-text">
    Our Team
  </p>
  <div className="responsive-container-block">

    <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container"> */}
      <div className="card">
        <div className="team-image-wrapper">
          <img className="team-member-image" src={props.profile}/>
        </div>
        <p className="text-blk name">
          {props.memberName}
        </p>
        <p className="text-blk position">
          {props.memberDesignation}
        </p>
        <p className="text-blk feature-text">
          {props.memberFeaturedText}
        </p>
        <div className="social-icons">
          <a href="https://www.twitter.com" target="_blank">
            <img className="twitter-icon" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Icon.svg"/>
          </a>
          <a href="https://www.facebook.com" target="_blank">
            <img className="facebook-icon" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Icon-1.svg"/>
          </a>
        </div>
      </div>
    </div>
  // </div> 
// </div>
    // </div>
  )
}

export default TeamCard
