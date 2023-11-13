

import ArticleBox from '../assets/ArticleBox/ArticleBox'
import React, {useEffect, useState} from 'react'
import './NewsAllArticelsSection.scss'
import { Link } from 'react-router-dom'


const NewsAllArticelsSection = () => {

    const [article, setArticles] = useState([])

    useEffect(() => {
      getArticles()
    }, [])
  
    const getArticles = async () => {
      const result = await fetch('https://win23-assignment.azurewebsites.net/api/articles?take=9')
  
      if (result.status === 200)
          setArticles(await result.json())
    }
   

  return (

    <div className="news-section container">
        <h2>Our News & Articels</h2>
        <div className="crito-articles">
            
            {   
              article.map(( myItem, index ) => (
                <ArticleBox key={index} id={myItem.id} url={myItem.url} title={myItem.title} alt={myItem.alt} photo={myItem.imageUrl} topic={myItem.category} text={myItem.content} />
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