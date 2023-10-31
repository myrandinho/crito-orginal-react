import React from 'react'

const MyProject = ({photo, title, url, text}) => {
  return (
    <article>
        <img src={photo} alt="text insert here" />
        <h3>{title}</h3>
        <a href={url}> {text}<i class="fa-solid fa-arrow-up-right"></i></a>
    </article>
  )
}

export default MyProject