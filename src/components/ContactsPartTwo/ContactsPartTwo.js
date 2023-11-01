import React from 'react'
import './ContactsPartTwo.scss'

const ContactsPartTwo = () => {
  return (
    <section class="part-2">
    <div class="contacts container">
        <div class="contacts-positioning">
            <div class="contact-box-border">
                <div class="invinsable-box">
                    <div class="round-logo"><i class="fa-sharp fa-solid fa-location-dot"></i></div>
                    <div class="information-contact">
                    <h3>Visit us</h3>
                    <p>Sveavägen 31 <br></br>111 34 STOCKHOLM</p>
                    </div>
                </div>
            </div>
            <div class="contact-box-border">
                <div class="invinsable-box">
                    <div class="round-logo"><i class="fa-solid fa-phone"></i></div>
                    <div class="information-contact">
                        <h3>Call us</h3>
                        <p>+46 (8) 121 470 50<br></br>+46 (8) 121 470 51</p>
                    </div>
                </div>   
            </div>
            <div class="contact-box-border">
                <div class="invinsable-box">
                    <div class="round-logo"><i class="fa-sharp fa-solid fa-envelope"></i></div>
                    <div class="information-contact">
                        <h3>Email us</h3>
                        <p>info@crito.com<br></br>support@crito.com</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>
  )
}

export default ContactsPartTwo