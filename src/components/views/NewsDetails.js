import React from 'react'
import HeaderSection from '../HeaderSection/HeaderSection'
import FooterSection from '../FooterSection/FooterSection'
import NewArticleSection from '../NewArticleSection/NewArticleSection'
import DetailedArticle from '../DetailedArticle/DetailedArticle'


const NewsDetails = () => {
  return (
    <>  
    <HeaderSection />
    <DetailedArticle />
    <NewArticleSection />
    <FooterSection />
    
    </>
  )
}

export default NewsDetails