import React from 'react'

const MyMember = ({photo, alt, memberName, title}) => {
  return (
    <div className="member">
        <img src={photo} alt={alt} />                       
        <h3 className="h3-text">{memberName}</h3>
        <p>{title}</p>
    </div>
  )
}

export default MyMember