

import ArticleBox from '../assets/ArticleBox/ArticleBox'
import React from 'react'
import './NewsAllArticelsSection.scss'
import { Link } from 'react-router-dom'
import { useArticles } from '../contexts/ArticleContext'


const NewsAllArticelsSection = () => {

  const { articles } = useArticles();
 
   

  return (

    <div className="news-section container">
        <h2>Our News & Articels</h2>
        <div className="crito-articles">
            
            {   
              articles.map(( myItem, index ) => (
                <ArticleBox key={index} date={myItem.published} id={myItem.id} url={myItem.url} title={myItem.title} alt={myItem.alt} photo={myItem.imageUrl} topic={myItem.category} text={myItem.content} />
              ))
            }     
        </div>
        <div className="my-pages">
        <Link className="choose-page"><i className="fa-solid fa-arrow-left"></i></Link>
        <Link className="choose-page">1</Link>
        <Link className="choose-page">2</Link>
        <Link className="choose-page">3</Link>
        <Link className="choose-page">...</Link>
        <Link className="choose-page">9</Link>
        <Link className="choose-page"><i className="fa-solid fa-arrow-right"></i></Link>
        </div>
    </div>
  )
}

export default NewsAllArticelsSection