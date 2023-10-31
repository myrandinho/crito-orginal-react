import React from 'react'
import './RegisterSection.scss'
import Button from '../generics/Button/Button'

const RegisterSection = () => {
  return (
    <section class="section-11">
        <div class="submit-your-mail container">
            <h2>Get News Updates By Signup</h2>
            <div class="empty-field-and-subscribe-btn">
                <form class="searchbox">
                    <input class="insert-your-email" type="text" placeholder="username@domain.com" />
                </form>
                <div class="button-position-center">
                    <Button type="yellow" url="index.html" title="Subscribe" />
                </div>
            </div>
        </div>
        <img src="images/background-wavy-lines.svg" alt="wavy lines" />
    </section>
  )
}

export default RegisterSection