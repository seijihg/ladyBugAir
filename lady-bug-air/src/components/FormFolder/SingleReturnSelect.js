import React from 'react'

const SingleReturnSelect = ({notsingle, singleReturnState}) => {
  return (
    <>
    <select onChange={singleReturnState} value={notsingle}>
        <option value="return">Return</option>
        <option value="single">One-way</option>
    </select>
    </>
  )
}

export default SingleReturnSelect