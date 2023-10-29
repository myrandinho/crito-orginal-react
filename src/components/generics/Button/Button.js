import React from 'react'
import './Button.scss'

const Button = ({type, url, title}) => {


    const GetButtonClassName = () => {
        switch(type) {
            case 'yellow':
                return 'btn-yellow'
            case 'dark':
                return 'dark-btn'
            default:
                return 'btn-transparent'
        }
    }


  return (
    <a className={GetButtonClassName()} href={url}>{title}<i className="fa-solid fa-arrow-up-right"></i></a>
  )
}

export default Button