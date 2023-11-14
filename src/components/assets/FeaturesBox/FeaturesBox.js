import React from 'react'
import './FeaturesBox.scss'

const FeaturesBox = ({iconClass, topic, text}) => {
  return (
    <>
        <i class={iconClass}></i>
        <h3 class="h3-text">{topic}</h3>
        <p>{text}</p>
    </>
  )
}

export default FeaturesBox