import React from 'react'

const BagDetails = ({bagRefId, descriptions}) => {
  const getDescription = () => {
    return descriptions.map(desc => {
      return (
        <li key={Math.floor(Math.random() * 10000) + 1 }>
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