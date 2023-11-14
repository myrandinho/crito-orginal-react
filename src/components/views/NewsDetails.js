import React from 'react'
import HeaderSection from '../HeaderSection/HeaderSection'
import FooterSection from '../FooterSection/FooterSection'
import ArticleSectionNewsDetails from '../ArticleSectionNewsDetails/ArticleSectionNewsDetails'
import DetailedArticle from '../DetailedArticle/DetailedArticle'
import NewsTitleSection from '../NewsTitleSection/NewsTitleSection'


const NewsDetails = () => {
  return (
    <>  
    <HeaderSection />
    <DetailedArticle />
    <ArticleSectionNewsDetails />
    <FooterSection />
    
    </>
  )
}

export default NewsDetails