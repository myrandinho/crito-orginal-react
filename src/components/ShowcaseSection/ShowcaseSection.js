import React from 'react'
import './ShowcaseSection.scss'
import Button from '../generics/Button/Button.js'

const ShowcaseSection = () => {
  return (
    <section>
        <div className="section-1">
            <div className="what-we-provide-section container">
                <div className="what-we-provide-text-btns">
                    <h1>We Provide The Best Business Solutions</h1>
                    <p>Establish your vision and value propisition and turn them into testable prototypes.</p>
                    <div className="button-section">
                        <div className="button-position">
                            <Button type="yellow" url="#" title="Get consulting" />
                            <Button type="transparent" url="#" title="Learn More" />
                        </div>
                    </div>
                </div>
                <div className="picture-of-crito-worker-part">
                    <img src="/images/crito-employee.png" alt="Guy thinking while holding a notepad" />
                </div>
            </div>
            <img className="wavy-lines" src="images/background-lines.svg" alt="lines" />
        </div>
    </section>
  )
}

export default ShowcaseSection