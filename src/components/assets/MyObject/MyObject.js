import React from 'react'
import './MyObject.scss'

const MyObject = ({title, photo, description}) => {
  return (
    <div class="logo-and-text">
        <div class="circle-logo">
            <img src={photo} />
        </div>
        <div class="text-h3-and-p">
            <h3 class="h3-text">{title}</h3>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default MyObject