import React from 'react'
import './NewsTitleSection.scss'

const NewsTitleSection = () => {
  return (
    <section className="part-1">
    <div className="lets-connect container-fluid">
        <div className="lets-connect-box">
            <div className="p-topics">
                <p>Home</p>
                <p className="medium-p">News</p>
            </div>
            <h1>News & Articles</h1>
        </div>
        <img src="images/background-lines.svg" alt="lines" />
    </div>
    </section>
  )
}

export default NewsTitleSection