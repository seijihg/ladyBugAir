import React from 'react'
import OfferCard from './OfferCard';

const SearchResults = ({searchResults}) => {
  const RenderOfferCard = () => {
    if (!Array.isArray(searchResults)) {
      return (
        searchResults.offers.map(offer => {
          return (
            <OfferCard key={offer.offerId} offer={offer} flights={searchResults.flights} destinations={searchResults.destinations}/>
          )
        })
      )
    }
  }
  return (
    <>
      {RenderOfferCard()}
    </>
  )
}

export default SearchResults