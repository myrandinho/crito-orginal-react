
import './NewArticleSection.scss'
import Button from '../generics/Button/Button'
import ArticleBox from '../assets/ArticleBox/ArticleBox'
import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

const ArticleSection = () => {

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
    <section class="section-10">
        <div class="Article-and-news container">
            <div class="text-h2-and-button">
                <p class="red-text">Article & News</p>
                <div class="Topic-and-button">
                    <h2>Get Every Single Articles & News</h2>
                    <div class="article-btn-position">
                        <Button type="yellow" url="index.html" title="Browse Articles" />
                    </div> 
                </div>
            </div>
            <div class="crito-articles">
            {   article.map(( myItem, index ) => (
                        <ArticleBox key={index} url={myItem.url} title={myItem.title} alt={myItem.alt} photo={myItem.imageUrl} topic={myItem.category} text={myItem.content} />
                ))
                }     
            </div>
            <div class="small-circles">
                <a class="small-circle" href="#"></a>
                <a class="small-circle" href="#"></a>
                <a class="small-circle" href="#"></a>
                <a class="small-circle" href="#"></a>
                <a class="small-circle" href="#"></a>
            </div>
        </div>
    </section>
  )
}

export default ArticleSection