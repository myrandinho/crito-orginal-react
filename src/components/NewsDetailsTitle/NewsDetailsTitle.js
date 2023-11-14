import React from 'react'
import './NewsDetailsTitle.scss'
import PageTopic from '../generics/PageTopic/PageTopic'

const NewsDetailsTitle = () => {
  return (
    <section className="part-1">
    <div className="lets-connect container-fluid">
        <PageTopic text="News" topic="News & Articles" />
        <img src="images/background-lines.svg" alt="lines" />
    </div>
    </section>
  )
}

export default NewsDetailsTitle