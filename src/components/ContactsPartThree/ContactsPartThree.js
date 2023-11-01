import React from 'react'
import './ContactsPartThree.scss'

const ContactsPartThree = () => {
  return (
    <section class="part-3">
    <div class="leave-message-form container">
        <div class="topic-message">
            <h1>Leave us a message<br></br>for any information.</h1>
        </div>
        <form id="registerform" method="post">
            <div class="form-block">
                <div>
                    <input id="name" name="name" title="name" placeholder="Name*" />
                </div>
                <div>
                    <input id="mail" name="mail" title="mail" placeholder="Email*" />
                </div>
                <div>
                    <input id="yourMessage" name="yourMessage" title="yourMessage" placeholder="Your Message*" />
                </div>
                <div class="yellow-button">Send Message<i class="fa-solid fa-arrow-up-right"></i></div>
            </div>
        </form>
    </div>
</section>
  )
}

export default ContactsPartThree