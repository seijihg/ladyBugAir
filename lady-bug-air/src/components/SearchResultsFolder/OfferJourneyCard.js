import React from 'react'
import SegmentCard from './SegmentCard';

const OfferJourneyCard = ({destination, segments, provider}) => {
  const renderSegmentCard = () => {
    return (
      segments.map(flight => flight.flightSegments.map(seg => {
        return (
          <SegmentCard key={seg.id} {...seg} />
        )
      }) )
    )
  }
  return (
    <>
      {renderSegmentCard()}
    </>
  )
}

export default OfferJourneyCard