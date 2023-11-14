import React from 'react'
import './ContactsPartOne.scss'
import PageTopic from '../generics/PageTopic/PageTopic'

const ContactsPartOne = () => {
  return (
    <section className="part-1">
        <div className="lets-connect container-fluid">
            <PageTopic text="Contact" topic="Let's Connect"/>
            <img src="images/background-lines.svg" alt="lines" />
        </div>
    </section>
  )
}

export default ContactsPartOne