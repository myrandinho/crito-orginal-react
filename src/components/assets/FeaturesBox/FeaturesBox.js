import React from 'react'
import './FeaturesBox.scss'

const FeaturesBox = ({iconClass, topic, text}) => {
  return (
    <>
        <i className={iconClass}></i>
        <h3 className="h3-text">{topic}</h3>
        <p>{text}</p>
    </>
  )
}

export default FeaturesBox