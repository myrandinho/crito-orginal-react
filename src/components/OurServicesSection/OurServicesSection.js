import React from 'react'
import './OurServicesSection.scss'
import Button from '../generics/Button/Button'
import ServiceBox from '../assets/ServiceBox/ServiceBox'
import MyTopic from '../generics/MyTopic/MyTopic'


const OurServicesSection = () => {
  return (
    <section className="section-5">
        <div className="our-services container">
            <div className="title-align">
                <MyTopic text="Our Services" title="We Provide The Best Service for Consulting" />
            </div>
            <div className="service-boxes">
                <ServiceBox title="Business Advice" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url="index.html" />
                <ServiceBox title="Business Startup" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url="index.html" />
                <ServiceBox title="Financial Advice" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url="index.html" />
                <ServiceBox title="Risk Management" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url="index.html" />
            </div>
            <div className="browse-btn-center">
                <Button type="transparent" url="#" title="Browse Services" />
            </div>
        </div>
        <img src="images/background-lines.svg" alt="lines" />
    </section>
  )
}

export default OurServicesSection