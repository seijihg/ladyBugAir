import React from 'react'

const PeopleCount = ({addAdultHandler, removeAdultHandler, count}) => {
  return (
    <>
    <div>
      <span onClick={removeAdultHandler}> - </span>
      {count.length === 1 ? 
      <div>
        {count.length} Adult
      </div> : 
      <div>
        {count.length} Travellers
      </div>}
      <span onClick={addAdultHandler}> + </span>
    </div>
    </>
  )
}

export default PeopleCount