import React from 'react'

const BagDetails = ({bagRefId, descriptions}) => {
  const getDescription = () => {
    return descriptions.map(desc => {
      return (
        <li>
          {desc.Text}
        </li>
      )
    })
  }
  return (
    <div>
      <ul>
        <p>{bagRefId}</p>
        {getDescription()}
      </ul>
    </div>
  )
}
export default BagDetails