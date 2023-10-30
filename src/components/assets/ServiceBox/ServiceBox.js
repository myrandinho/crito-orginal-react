import React from 'react'
import './ServiceBox.scss'

const ServiceBox = ({title, description, url}) => {
  return (
    <div className="business-subject">
        <div className="small-line"></div>
        <h3>{title}</h3>
        <p>{description}</p>
        <nav className="btn-right">
            <a className="arrow-button" href={url}><i className="fa-sharp fa-regular fa-arrow-right"></i></a>   
        </nav>     
    </div>
  )
}

export default ServiceBox