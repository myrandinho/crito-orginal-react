import React from 'react'
import { Link } from 'react-router-dom'


const ArticleBox = ({photo, alt, topic, title, text, id}) => {
  return (
    <article class="article-and-info">
        <Link id={id} to={`/news/${id}`}>
            <div className="photo-box">
                <img src={photo} alt={alt} />
                <div className="date-box"></div>
            </div>
            <p>{topic}</p>
            <h4>{title}</h4>
            <p>{text}</p>
        </Link>
    </article>
  )
}

export default ArticleBox