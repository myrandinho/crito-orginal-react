import React from 'react'
import { Link } from 'react-router-dom'


const ArticleBox = ({photo, alt, topic, title, text, id}) => {
  return (
    <article class="article-and-info">
        <Link id={id} to={`/news/${id}`}>
            <img src={photo} alt={alt} />
            <p>{topic}</p>
            <h4>{title}</h4>
            <p>{text}</p>
        </Link>
    </article>
  )
}

export default ArticleBox