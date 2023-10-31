import React from 'react'
import './ReviewSection.scss'
import MyTopic from '../generics/MyTopic/MyTopic'
import Button from '../generics/Button/Button'
import ReviewBox from '../assets/ReviewBox/ReviewBox'

const ReviewSection = () => {

    const ReviwersList = [
        {photo: "images/5stars.svg", alt:"Five small red stars", photo2: "images/1person.png", alt2: "Picture of Cassandra Warren", reviewName: "Cassandra Warren", title: "Business Manager, Dorfus", text: '"Lorem ipsum dolor,sit amet consectetur adipisicing elit. Laudantium libero, ad  dignissimis velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"'},
        {photo: "images/5stars.svg", alt:"Five small red stars", photo2: "images/2person.png", alt2: "Picture of Amanda Tulling", reviewName: "Amanda Tulling", title: "Senior Developer, Square", text: '"Lorem ipsum dolor,sit amet consectetur adipisicing elit. Laudantium libero, ad  dignissimis velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"'},
        {photo: "images/5stars.svg", alt:"Five small red stars", photo2: "images/3person.png", alt2: "Picture of Jack Mcdogglas", reviewName: "Jack Mcdogglas", title: "Key Account Manager, Gobona", text: '"Lorem ipsum dolor,sit amet consectetur adipisicing elit. Laudantium libero, ad  dignissimis velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"'}


    ]   

  return (
    <section class="section-9">
        <div class="container client-reviews">
            <div class="review-title">
                <MyTopic text="Testimonial" title="What Our Clients Says" />
            </div>
            <div class="flexed-boxes">
            {   ReviwersList.map(( myItem, index ) => (
                        <ReviewBox key={index} title={myItem.title} reviewName={myItem.reviewName} photo={myItem.photo} photo2={myItem.photo2} text={myItem.text} alt={myItem.alt} alt2={myItem.alt2} />
                ))
                }    
            </div>
            <div class="projects-button2">
                <Button type="dark" url="index.html" title="All Reviews" />
            </div>
        </div>
        <div class="white-background-position">
            <div class="white-background"></div>
        </div>
    </section>
  )
}

export default ReviewSection