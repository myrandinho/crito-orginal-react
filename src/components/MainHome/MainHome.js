import React from 'react'
import ShowcaseSection from '../ShowcaseSection/ShowcaseSection'
import PartnersSection from '../PartnersSection/PartnersSection'
import AboutCompanySection from '../AboutCompanySection/AboutCompanySection'
import OurServicesSection from '../OurServicesSection/OurServicesSection'
import WhyChooseUsSection from '../WhyChooseUsSection/WhyChooseUsSection'
import ProjectsSection from '../ProjectsSection/ProjectsSection'
import MembersSection from '../MembersSection/MembersSection'
import ReviewSection from '../ReviewSection/ReviewSection'
import RegisterSection from '../RegisterSection/RegisterSection'
import NewArticleSection from '../NewArticleSection/NewArticleSection'
import NewFeaturesSection from '../NewFeaturesSection/NewFeaturesSection'




const MainHome = () => {
  return (
    <div className="wrapper">
        <ShowcaseSection />
        <PartnersSection />
        <NewFeaturesSection />
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