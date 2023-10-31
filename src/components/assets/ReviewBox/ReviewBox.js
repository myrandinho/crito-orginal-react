import React from 'react'

const ReviewBox = ({photo, alt, photo2, alt2, reviewName, title, text}) => {
  return (
    <div class="review-box">
        <img class="five-stars" src={photo} alt={alt} />
        <p>{text}</p>
        <div class="image-name-reviewer">
            <img src={photo2} alt={alt2} />
            <div class="name-and-role">
                <h3>{reviewName}</h3>
                <p class="red-text">{title}</p>
            </div>
        </div>
    </div>
  )
}

export default ReviewBox