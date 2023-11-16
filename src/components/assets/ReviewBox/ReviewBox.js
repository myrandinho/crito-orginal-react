import React from 'react'

const ReviewBox = ({photo, alt, photo2, alt2, reviewName, title, text}) => {
  return (
    <div className="review-box">
        <img className="five-stars" src={photo} alt={alt} />
        <p>{text}</p>
        <div className="image-name-reviewer">
            <img src={photo2} alt={alt2} />
            <div className="name-and-role">
                <h3>{reviewName}</h3>
                <p className="red-text">{title}</p>
            </div>
        </div>
    </div>
  )
}

export default ReviewBox