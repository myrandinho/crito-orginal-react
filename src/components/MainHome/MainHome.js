import React from 'react'
import ShowcaseSection from '../ShowcaseSection/ShowcaseSection'
import FeaturesSection from '../PartnersSection/PartnersSection'
import AboutCompanySection from '../AboutCompanySection/AboutCompanySection'
import OurServicesSection from '../OurServicesSection/OurServicesSection'
import WhyChooseUsSection from '../WhyChooseUsSection/WhyChooseUsSection'
import ProjectsSection from '../ProjectsSection/ProjectsSection'
import MembersSection from '../MembersSection/MembersSection'
import ReviewSection from '../ReviewSection/ReviewSection'
import RegisterSection from '../RegisterSection/RegisterSection'
import NewArticleSection from '../NewArticleSection/NewArticleSection'



const MainHome = () => {
  return (
    <div className="wrapper">
        <ShowcaseSection />
        <FeaturesSection />
        <AboutCompanySection />
        <OurServicesSection />
        <WhyChooseUsSection />
        <ProjectsSection />
        <MembersSection />
        <ReviewSection />
        <NewArticleSection />
        <RegisterSection />

    </div>
  )
}

export default MainHome