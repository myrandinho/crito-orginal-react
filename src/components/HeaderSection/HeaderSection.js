import React from 'react'
import './HeaderSection.scss'
import { Link, NavLink } from 'react-router-dom'

const HeaderSection = () => {
  return (
    <>
    <div className="wrapper-grid">
        <header>
           <div className="container">
            <button className="btn-menubars"><i className="fa-solid fa-bars"></i></button>
                <div className="logotype">
                    <a href="index.html">
                        <img src="/images/logo.svg" alt="crito logotype" />
                    </a>
                </div>
                <div className="contactinformation-bar">
                    <div className="contact-box"><i className="fa-sharp fa-regular fa-phone"></i>+46 (8) 121 470 50</div>
                    <div className="contact-box"><i className="fa-regular fa-envelope"></i>info@crito.com</div>
                    <div className="contact-box"><i className="fa-regular fa-location-dot"></i>Sveavägen 31, 111 34 STOCKHOLM</div>
                </div>
                <div className="socialmedia-bar">
                    <a href="https://facebook.com"><i className="fa-brands fa-facebook"></i></a>
                    <a href="https://twitter.com"><i className="fa-brands fa-square-twitter"></i></a>
                    <a href="https://instagram.com"><i className="fa-brands fa-instagram"></i></a>
                    <a href="https://linkedin.com"><i className="fa-brands fa-linkedin"></i></a>
                </div>
                <div className="menu">
                    <nav>
                        <NavLink to="/">Home</NavLink>
                        <Link to="/service">Service</Link>
                        <Link to="/news">News</Link>
                        <NavLink to="/contacts">Contacts</NavLink>
                    </nav>
                    <div>
                    <a className="yellow-btn" href="login.html">Login <i className="fa-solid fa-arrow-up-right"></i></a>
                    </div>
                </div>
           </div>
        </header>
    </div>
    </>
  )
}

export default HeaderSection