import React from 'react'

const MyTopic = ({text, title}) => {
  return (
    <>
      <p className="red-text">{text}</p>
      <h2>{title}</h2>
    </>
  )
}

export default MyTopic