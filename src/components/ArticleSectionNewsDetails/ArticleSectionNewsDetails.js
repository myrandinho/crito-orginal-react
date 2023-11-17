
import './ArticleSectionNewsDetails.scss'
import Button from '../generics/Button/Button'
import ArticleBox from '../assets/ArticleBox/ArticleBox'
import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'



const ArticleSectionNewsDetails = () => {

    const [article, setArticles] = useState([])

    useEffect(() => {
      getArticles()
    }, [])
  
    const getArticles = async () => {
      const result = await fetch('https://win23-assignment.azurewebsites.net/api/articles?take=3')
  
      if (result.status === 200)
          setArticles(await result.json())
    }
   

  return (
    <section className="section-article">
        <div className="Article-and-news container">
            <div className="text-h2-and-button">
                <p className="red-text">Article & News</p>
                <div className="Topic-and-button">
                    <h2>Get Every Single Articles & News</h2>
                    <div className="article-btn-position">
                        <Button type="white" url="index.html" title="Browse Articles" />
                    </div> 
                </div>
            </div>
            <div className="crito-articles">
            {   article.map(( myItem, index ) => (
                        <ArticleBox key={index} id={myItem.id} date={myItem.published} url={myItem.url} title={myItem.title} alt={myItem.alt} photo={myItem.imageUrl} topic={myItem.category} text={myItem.content} />
                ))
                }     
            </div>
            <div className="small-circles">
                <Link to="*" className="small-circle"></Link>
                <Link to="*" className="small-circle"></Link>
                <Link to="*" className="small-circle"></Link>
                <Link to="*" className="small-circle"></Link>
                <Link to="*" className="small-circle"></Link>
            </div>
        </div>
    </section>
  )
}

export default ArticleSectionNewsDetails