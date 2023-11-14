import React from 'react'
import './PageTopic.scss'

const PageTopic = ({text, topic}) => {
  return (
    <div className="lets-connect-box">
        <div className="p-topics">
            <p>Home</p>
            <p className="medium-p">{text}</p>
        </div>
        <h1>{topic}</h1>
    </div>
  )
}

export default PageTopic