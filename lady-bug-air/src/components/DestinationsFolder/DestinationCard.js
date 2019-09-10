import React from 'react'

const DestinationCard = ({thumb}) => {
  return (
    <div className="destination_card">
      <img src={thumb} alt="cities"></img>
      <div className="destination_content">
        <h1>City, Country</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat interdum varius sit amet mattis. Lorem mollis aliquam ut porttitor. Nulla pellentesque dignissim enim sit.</p>
        <button type="button" className="btn">Read More</button>
      </div>
    </div>
  )
}
export default DestinationCard