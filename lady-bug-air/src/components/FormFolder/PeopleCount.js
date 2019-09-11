import React from 'react'

const PeopleCount = ({addAdultHandler, removeAdultHandler, count}) => {
  return (
    <>
    <div className="passengers_number">
      <div onClick={removeAdultHandler} className="m_p_icons"><i class="far fa-minus-square"></i></div>
      {count.length === 1 ? 
      <div>
        {count.length} Adult
      </div> : 
      <div>
        {count.length} Travellers
      </div>}
      <div onClick={addAdultHandler} className="m_p_icons"><i class="far fa-plus-square"></i></div>
    </div>
    </>
  )
}

export default PeopleCount