import React from 'react'

const MyLinks = ({title, url, url2, url3, url4, text, text2, text3, text4}) => {
  return (
    <nav className="topics-and-links">
        <h3>{title}</h3>
        <a href={url}>{text}</a>
        <a href={url2}>{text2}</a>
        <a href={url3}>{text3}</a>
        <a href={url4}>{text4}</a>
    </nav>
  )
}

export default MyLinks