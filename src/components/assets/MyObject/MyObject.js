import React from 'react'
import './MyObject.scss'

const MyObject = ({title, photo, description}) => {
  return (
    <div className="logo-and-text">
        <div className="circle-logo">
            <img src={photo} alt="a photo" />
        </div>
        <div className="text-h3-and-p">
            <h3 className="h3-text">{title}</h3>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default MyObject