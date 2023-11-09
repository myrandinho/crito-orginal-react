import React from 'react'
import './ArticleSection.scss'
import Button from '../generics/Button/Button'
import ArticleBox from '../assets/ArticleBox/ArticleBox'

const ArticleSection = () => {

    const ArticleList = [
        {photo: "images/article1.png", url: "index.html", alt: "Woman sitting while she's smiling. The date on this article is 25th Mars.", topic: "Business", title: "How To Use Digitalization In The Classroom", text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero."},
        {photo: "images/article2.png", url: "index.html", alt: "Picture of a unknown website. The date on this article is 17th Mars.", topic: "Business", title: "How To Implement Chat GPT In Your Projects", text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero."},
        {photo: "images/article3.png", url: "index.html", alt: "Picture of a unknown website. The date on this article is 17th Mars.", topic: "Business", title: "The Guide To Support Modern CSS Design", text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero."}


    ]

   

  return (
    <section className="section-10">
        <div className="Article-and-news container">
            <div className="text-h2-and-button">
                <p className="red-text">Article & News</p>
                <div className="Topic-and-button">
                    <h2>Get Every Single Articles & News</h2>
                    <div className="article-btn-position">
                        <Button type="yellow" url="index.html" title="Browse Articles" />
                    </div> 
                </div>
            </div>
            <div className="crito-articles">
            {   ArticleList.map(( myItem, index ) => (
                        <ArticleBox key={index} url={myItem.url} title={myItem.title} alt={myItem.alt} photo={myItem.photo} topic={myItem.topic} text={myItem.text} />
                ))
                }     
            </div>
            <div className="small-circles">
                <a className="small-circle" href="#"></a>
                <a className="small-circle" href="#"></a>
                <a className="small-circle" href="#"></a>
                <a className="small-circle" href="#"></a>
                <a className="small-circle" href="#"></a>
            </div>
        </div>
    </section>
  )
}

export default ArticleSection