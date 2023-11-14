import React from 'react'
import './FeaturesSection.scss'
import MyTopic from '../generics/MyTopic/MyTopic'
import FeaturesBox from '../assets/FeaturesBox/FeaturesBox'

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
                    <FeaturesBox iconClass="fa-regular fa-handshake" topic="Business Advice" text="Lorem ipsum, dolor sit amet consectetur adipsicing elit." />
                </div>
                <div class="startup-business">
                    <FeaturesBox iconClass="fa-regular fa-lightbulb-on" topic="Startup Business" text="Lorem ipsum, dolor sit amet consectetur adipsicing elit." />
                </div>
                <div class="financial-advice">
                    <FeaturesBox iconClass="fa-regular fa-chart-mixed-up-circle-dollar" topic="Financial Advice" text="Lorem ipsum, dolor sit amet consectetur adipsicing elit." />
                </div>
                <div class="risk-management">
                    <FeaturesBox iconClass="fa-sharp fa-regular fa-box-circle-check" topic="Risk Management" text="Lorem ipsum, dolor sit amet consectetur adipsicing elit." />
                </div>
            </div>
        </div>
    </div>
    </section>
  )
}

export default FeaturesSection