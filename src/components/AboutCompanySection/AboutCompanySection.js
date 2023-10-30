import React from 'react'
import './AboutCompanySection.scss'
import Button from '../generics/Button/Button'
import MyTopic from '../generics/MyTopic/MyTopic'

const AboutCompanySection = () => {
  return (
    <>
    <section class="section-4">
        <div class="aboutcompany-section container">
            <div class="about-founder">
                <img src="/images/samantha.png" alt="Founder Samantha Brown holding a notepad" />
                <div class="samantha-box">
                    <div class="samantha-title">
                        <h3>Samantha Brown,</h3><p> Founder</p>
                    </div>
                    <p class="p-medium-italic"><i>"Lorem ipsum dolor sit amet consectetur <br></br>adipisicing elit."</i></p>
                </div>
            </div>
            <div class="about-company-info">
            
                <MyTopic text="About Company" title="We Are Business Consulting & Credit Repair Experts" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam <br></br> officiis quas assumenda esse obacaecati? Ex esse error voluptates iure <br></br>Vel totam euos.<br></br><br></br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse <br></br>quasi incidunt adipisci accusantium libero provident voluptate amet.</p>
                <nav class="about-company-btns">
                    <Button id="testasdf" type="dark" title="Learn More" url="index.html" />
                    <a href="#" class="play-btn"><i class="fa-sharp fa-solid fa-play"></i></a>
                    <h1 class="intro-text">Intro Video</h1>   
                </nav>
            </div>
        </div>
    </section>
    </>
  )
}

export default AboutCompanySection