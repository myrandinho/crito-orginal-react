import React from 'react'
import HeaderSection from '../HeaderSection/HeaderSection'
import FooterSection from '../FooterSection/FooterSection'
import ArticleSection from '../NewArticleSection/NewArticleSection'
import DetailedArticle from '../DetailedArticle/DetailedArticle'


const NewsDetails = () => {
  return (
    <>  
    <HeaderSection />
    <DetailedArticle />
    <ArticleSection />
    <FooterSection />
    
    </>
  )
}

export default NewsDetails