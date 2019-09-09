import React from 'react'

const ViewDealButton = ({viewDealHandler}) => {
  return (
    <div onClick={viewDealHandler} className="btn btn-view-deal">
      <p>View Deal</p>
    </div>
  )
}
export default ViewDealButton