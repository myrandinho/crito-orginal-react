import React from 'react'

const MyMember = ({photo, alt, memberName, title}) => {
  return (
    <div class="member">
        <img src={photo} alt={alt} />                       
        <h3 class="h3-text">{memberName}</h3>
        <p>{title}</p>
    </div>
  )
}

export default MyMember