import React from 'react'

const ArticleBox = ({photo, alt, topic, title, text, url}) => {
  return (
    <article class="article-and-info">
        <a href={url}>
            <img src={photo} alt={alt} />
            <p>{topic}</p>
            <h4>{title}</h4>
            <p>{text}</p>
        </a>
    </article>
  )
}

export default ArticleBox