import React from 'react'
import './AboutCompanySection.scss'
import Button from '../generics/Button/Button'
import MyTopic from '../generics/MyTopic/MyTopic'

const AboutCompanySection = () => {
  return (
    <>
    <section className="section-4">
        <div className="aboutcompany-section container">
            <div className="about-founder">
                <img src="/images/samantha.png" alt="Founder Samantha Brown holding a notepad" />
                <div className="samantha-box">
                    <div className="samantha-title">
                        <h3>Samantha Brown,</h3><p> Founder</p>
                    </div>
                    <p className="p-medium-italic"><i>"Lorem ipsum dolor sit amet consectetur <br></br>adipisicing elit."</i></p>
                </div>
            </div>
            <div className="about-company-info">
            
                <MyTopic text="About Company" title="We Are Business Consulting & Credit Repair Experts" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam <br></br> officiis quas assumenda esse obacaecati? Ex esse error voluptates iure <br></br>Vel totam euos.<br></br><br></br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse <br></br>quasi incidunt adipisci accusantium libero provident voluptate amet.</p>
                <nav className="about-company-btns">
                    <Button id="testasdf" type="dark" title="Learn More" url="index.html" />
                    <a href="#" className="play-btn"><i className="fa-sharp fa-solid fa-play"></i></a>
                    <h1 className="intro-text">Intro Video</h1>   
                </nav>
            </div>
        </div>
    </section>
    </>
  )
}

export default AboutCompanySection