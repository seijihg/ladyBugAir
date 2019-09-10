import React from 'react'

const SingleReturnSelect = ({notsingle, singleReturnState}) => {
  return (
    <div className="item">
    <select onChange={singleReturnState} value={notsingle}>
        <option value="return">Return</option>
        <option value="single">One-way</option>
    </select>
    </div>
  )
}

export default SingleReturnSelect