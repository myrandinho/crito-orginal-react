import React from 'react'
import './OurServicesSection.scss'

const OurServicesSection = () => {
  return (
    <section className="section-5">
        <div className="our-services container">
            <div className="title-align">
                <p className="red-text">Our Services</p>
                <h2>We Provide The Best Service for Consulting</h2>
            </div>
            <div className="service-boxes">
                <div className="business-subject">
                    <div className="small-line"></div>
                    <h3>Business Advice</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                    <nav className="btn-right">
                        <a className="arrow-button" href="#"><i className="fa-sharp fa-regular fa-arrow-right"></i></a>   
                    </nav> 
                </div>
                <div className="business-subject">
                    <div className="small-line"></div>
                    <h3>Business Startup</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                    <nav className="btn-right">
                        <a className="arrow-button" href="#"><i className="fa-sharp fa-regular fa-arrow-right"></i></a>   
                    </nav> 
                </div>
                <div className="business-subject">
                    <div className="small-line"></div>
                    <h3>Financial Advice</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                    <nav className="btn-right">
                        <a className="arrow-button" href="#"><i className="fa-sharp fa-regular fa-arrow-right"></i></a>   
                    </nav> 
                </div>
                <div className="business-subject">
                    <div className="small-line"></div>
                    <h3>Risk Management</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                    <nav className="btn-right">
                        <a className="arrow-button" href="#"><i className="fa-sharp fa-regular fa-arrow-right"></i></a>   
                    </nav> 
                </div>
            </div>
            <div className="browse-btn-center">
                <a className="yellow-button" href="#">Browse Services <i className="fa-solid fa-arrow-up-right"></i></a>   
            </div>
        </div>
        <img src="images/background-lines.svg" />
    </section>
  )
}

export default OurServicesSection