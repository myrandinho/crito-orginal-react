import React from 'react'
import './MembersSection.scss'
import Button from '../generics/Button/Button'
import MyMember from '../assets/MyMember/MyMember'

const MembersSection = () => {

    const MemberList = [
        {photo: "/images/person1.png", alt: "p1", memberName: "Kristine Palmer", title: "Chef Operation Officer" },
        {photo: "/images/person2.png", alt: "p2", memberName: "Mark Aubri", title: "Senior Consultant" },
        {photo: "/images/person3.png", alt: "p3", memberName: "Kimberly Hansen", title: "Senior Consultant" },
        {photo: "/images/person4.png", alt: "p4", memberName: "Justin Willoman", title: "Senior Tech Consultant" }

    ]



  return (
    <section class="section-8">
        <div class="meet-our-team container">
            <div class="team-box">
                <p class="red-text">Meet Our Team</p>
                <div class="h2-and-btn">
                    <h2>Experience Team Members</h2>
                    <div class="btn-placement">
                        <Button url="index.html" title="Browse Team " />
                    </div>
                </div>
                <div class="team-members">
                {   MemberList.map(( myItem, index ) => (
                        <MyMember key={index} title={myItem.title} alt={myItem.alt} photo={myItem.photo} memberName={myItem.memberName} />
                ))
                }    
                </div>
                <div class="small-circles">
                    <a class="small-circle" href="#"></a>
                    <a class="small-circle" href="#"></a>
                    <a class="small-circle" href="#"></a>
                    <a class="small-circle" href="#"></a>
                    <a class="small-circle" href="#"></a>
                </div>
            </div>
        </div>
    
    </section>
  )
}

export default MembersSection