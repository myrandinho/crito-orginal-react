import React from 'react'
import './ProjectsSection.scss'
import Button from '../generics/Button/Button'
import MyTopic from  '../generics/MyTopic/MyTopic'
import MyProject from '../assets/MyProject/MyProject'


const ProjectsSection = () => {

    const ProjectLinks = [  
        {photo: "/images/Image1.png", title: "Grow your business", text: "Read More ", url: "index.html"},
        {photo: "/images/Image2.png", title: "Why your client needs a responsive website", text: "Read More ", url: "index.html" },
        {photo: "/images/Image3.png", title: "Educate your employees to get better results", text: "Read More ", url: "index.html" },
        {photo: "/images/Image4.png", title: "Business insights is a important priece of your business", text: "Read More ", url: "index.html"}
      

    ]

  return (
    <section className="section-7">
        <div className="Project-section container">
            <div className="project-title">
                <MyTopic text="Project & Case Studies" title="Let's Looks our Global Projects" />
            </div>
            <div className="project-and-case">
            {   ProjectLinks.map(( myItem, index ) => (
                        <MyProject key={index} title={myItem.title} url={myItem.url} photo={myItem.photo} text={myItem.text} />
                ))
                }    
            </div>
            <div className="projects-button">
                <Button title="All Recent Projects " url="index.html" type="dark" />
            </div>
        </div>
    </section>

  )
}

export default ProjectsSection