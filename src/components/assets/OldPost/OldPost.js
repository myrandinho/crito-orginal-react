import React from 'react'

const OldPost = ({title, date}) => {
  return (
    <div className="recent-post-and-date">
        <h4>{title}</h4>
        <p>{date}</p>
    </div>
  )
}

export default OldPost