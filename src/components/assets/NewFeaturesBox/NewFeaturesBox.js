import React from 'react'
import './NewFeaturesBox.scss'

const NewFeaturesBox = ({iconClass, title, text}) => {
  return (
    <div className="feature">
        <i className={iconClass}></i>
        <h3>{title}</h3>
        <p>{text}</p>
    </div>
  )
}

export default NewFeaturesBox