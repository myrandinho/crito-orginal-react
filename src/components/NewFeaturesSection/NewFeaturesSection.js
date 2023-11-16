import React from 'react'
import './NewFeaturesSection.scss'
import MyTopic from '../generics/MyTopic/MyTopic'
import NewFeaturesBox from '../assets/NewFeaturesBox/NewFeaturesBox'

const NewFeaturesSection = () => {

    const FeatureList = [
        {iconClass: "fa-regular fa-handshake", title: "Business Advice", text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit." },
        {iconClass: "fa-regular fa-lightbulb-exclamation-on", title: "Startup Business", text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit." },
        {iconClass: "fa-regular fa-chart-mixed-up-circle-currency", title: "Financial Advice", text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit." },
        {iconClass: "fa-regular fa-box-circle-check", title: "Risk Management", text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit." }
    ]


  return (
    <section className="features-Section">
        <div className="outside-border container-fluid">
            <div className="features-content container">
                <div className="left-side">
                    <MyTopic text="Features" title="Our Accounting is trusted by thousand of companies"/>
                    <button className="long-yellow-button">Learn More <i className="fa-solid fa-arrow-up-right"></i></button>
                </div>
                <div className="right-side">
                {   FeatureList.map(( myItem, index ) => (
                        <NewFeaturesBox key={index} title={myItem.title} iconClass={myItem.iconClass} text={myItem.text} />
                ))
                }    
            </div>
            </div>
            
        </div>
    </section>
  )
}

export default NewFeaturesSection