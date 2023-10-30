import React from 'react'
import './WhyChooseUsSection.scss'
import MyObject from '../assets/MyObject/MyObject'

const WhyChooseUsSection = () => {

    const myObjects = [  
        {title: "Process Excellence", description: "Lorem, ipsum dolor sit amet consectetur.", photo: "/images/thumb1.png"},
        {title: "Strategic Planning", description: "Lorem, ipsum dolor sit amet consectetur.", photo: "/images/octagon2.png"},
        {title: "Experience Design", description: "Lorem, ipsum dolor sit amet consectetur.", photo: "/images/symbol3.png"},
        {title: "Artificial Inteligence", description: "Lorem, ipsum dolor sit amet consectetur.", photo: "/images/brain-4.png"}

    ]

  return (
    <section class="section-6">
        <div class="why-choose-us container"> 
            <div class="why-choose-us-info">
                <div class="why-choose-us-titles">
                    <p class="red-text">Why Choose Us</p>
                    <h2>Why We Are The <br></br> Best Business <br></br>Consulting Agency</h2>
                </div>
                {   myObjects.map(( myItem, index ) => (
                        <MyObject key={index} title={myItem.title} description={myItem.description} photo={myItem.photo} />
                ))
                }    
            </div>
            <div class="picture-on-box">
                <img src="images/two-persons.png" alt="Woman talking to other woman while holding a notepad" />
            </div>
        </div>
        <div class="beige-box-position container-fluid">
            <div class="beige-box"></div>
        </div>
    </section>
  )
}

export default WhyChooseUsSection