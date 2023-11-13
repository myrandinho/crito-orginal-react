import React from 'react'
import './ContactsPartTwo.scss'

const ContactsPartTwo = () => {
  return (
    <section className="part-2">
    <div className="contacts container">
        <div className="contacts-positioning">
            <div className="contact-box-border">
                <div className="invinsable-box">
                    <div className="round-logo"><i className="fa-sharp fa-solid fa-location-dot"></i></div>
                    <div className="information-contact">
                    <h3>Visit us</h3>
                    <p>Sveavägen 31 <br></br>111 34 STOCKHOLM</p>
                    </div>
                </div>
            </div>
            <div className="contact-box-border">
                <div className="invinsable-box">
                    <div className="round-logo"><i className="fa-solid fa-phone"></i></div>
                    <div className="information-contact">
                        <h3>Call us</h3>
                        <p>+46 (8) 121 470 50<br></br>+46 (8) 121 470 51</p>
                    </div>
                </div>   
            </div>
            <div className="contact-box-border">
                <div className="invinsable-box">
                    <div className="round-logo"><i className="fa-sharp fa-solid fa-envelope"></i></div>
                    <div className="information-contact">
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