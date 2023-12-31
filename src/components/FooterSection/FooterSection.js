import React from 'react'
import './FooterSection.scss'
import MyLinks from '../assets/MyLinks/MyLinks'

const FooterSection = () => {

    const LinkList = [
        {title: "Company", url: "index.html", url2: "index.html", url3: "index.html", url4: "index.html", text: "About", text2: "Features", text3: "Works", text4: "Career"},
        {title: "Help", url: "index.html", url2: "index.html", url3: "index.html", url4: "index.html", text: "Customer Support", text2: "Delivery Details", text3: "Terms & Conditions", text4: "Privacy Policy"},
        {title: "Resources", url: "index.html", url2: "index.html", url3: "index.html", url4: "index.html", text: "Free eBooks", text2: "Development Tutorial", text3: "How to - Blog", text4: "Youtube Playlist"},
        {title: "Link", url: "index.html", url2: "index.html", url3: "index.html", url4: "index.html", text: "Free eBooks", text2: "Development Tutorial", text3: "How to - Blog", text4: "Youtube Playlist"}


    ]

  return (
    <section className="section-12">
        <div className="crito-footer container">
            <nav className="footer-link-section">
                <div className="crito-logo-and-text">
                    <img src="images/crito-logo-white.svg" alt="Crito logotype" />
                    <p>Lorem ipsum dolor sit amet coonsectetur adipisicing elit. Placeat obcaecati voluptas voluptates! Voluptates laborum nam ratione minus necessitatibus, iure praesentium.</p>
                </div>
                {   LinkList.map(( myItem, index ) => (
                        <MyLinks key={index} title={myItem.title} url={myItem.url} url2={myItem.url2} url3={myItem.url3} url4={myItem.url4}
                         text={myItem.text} text2={myItem.text2} text3={myItem.text3} text4={myItem.text4} />
                ))
                }    
            </nav>
            <div className="copyright-and-socialmedia">
                <p><i className="fa-light fa-copyright"></i> 2023 Crito - Consulting Company inc. All rights Reserved.</p>
                <div className="socialmedia-bar">
                    <a href="https://facebook.com"><i className="fa-brands fa-facebook"></i></a>
                    <a href="https://twitter.com"><i className="fa-brands fa-square-twitter"></i></a>
                    <a href="https://instagram.com"><i className="fa-brands fa-instagram"></i></a>
                    <a href="https://linkedin.com"><i className="fa-brands fa-linkedin"></i></a>
                </div>
            </div>
        </div>
        <img className="background-lines-white" src="images/background-lines-white-right.svg" alt="lines" />
        <div className="long-grey-border"></div>
    </section>
  )
}

export default FooterSection