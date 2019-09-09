import React from 'react'
import SegmentCard from './SegmentCard';

const OfferJourneyCard = ({destination, segments, provider}) => {

  const renderSegmentCard = () => {
    return (
      segments.map(flight => {
        return (
          <SegmentCard 
            key={flight.flightSegments[0].id} 
            {...flight.flightSegments[0]} 
            stops={flight.flightSegments.length}
          />
        )
      })
    )
  }
  return (
    <>
      {renderSegmentCard()}
    </>
  )
}

export default OfferJourneyCard