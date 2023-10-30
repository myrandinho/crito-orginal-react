import React from 'react'
import './FeaturesSection.scss'
import MyTopic from '../generics/MyTopic/MyTopic'

const FeaturesSection = () => {
  return (
    <section class="section-3">
    <div class="grey-border-box container-fluid">
        <div class="container features-box">
            <div class="left-box">
                <div>
                    <MyTopic text="Features" title="Our Accounting is trusted by thousand of companies" />
                    <div class="center-my-button">
                        <button class="yellow-button">Learn More <i class="fa-solid fa-arrow-up-right"></i></button>
                    </div>
                </div>
            </div>
            <div class="right-box">
                <div class="business-advice">
                    <i class="fa-regular fa-handshake"></i>
                    <h3 class="h3-text">Business Advice</h3>
                    <p>Lorem ipsum, dolor sit amet <br></br> consectetur adipsicing elit.</p>
                </div>
                <div class="startup-business">
                    <i class="fa-regular fa-lightbulb-on"></i>
                    <h3 class="h3-text">Startup Business</h3>
                    <p>Lorem ipsum, dolor sit amet <br></br>consectetur adipisicing elit.</p>
                </div>
                <div class="financial-advice">
                    <i class="fa-regular fa-chart-mixed-up-circle-dollar"></i>
                    <h3 class="h3-text">Financial Advice</h3>
                    <p>Lorem ipsum, dolor sit amet <br></br>consectetur adipisicing elit.</p>
                </div>
                <div class="risk-management">
                    <i class="fa-sharp fa-regular fa-box-circle-check"></i>
                    <h3 class="h3-text">Risk Management</h3>
                    <p>Lorem ipsum, dolor sit amet <br></br>consectetur adipisicing elit.</p>
                </div>
            </div>
        </div>
    </div>
    </section>
  )
}

export default FeaturesSection