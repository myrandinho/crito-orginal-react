import React, { useState } from 'react';
import './ContactsPartThreeNew.scss';

const ContactsPartThreeNew = () => {
  const [formData, setFormData] = useState({
      myName: '',
      email: '',
      myMessage: ''
  });

  const [errors, setErrors] = useState({
      myName: '',
      email: '',
      myMessage: ''
  });

  const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
  };

  const validateForm = async (e) => {

        e.preventDefault();

        const nameRegex = /^[A-Za-z]+$/;
        const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}/;

        const newErrors = {
          myName: '',
          email: '',
          myMessage: ''
        };

      if (!nameRegex.test(formData.myName)) {
          newErrors.myName = 'Ditt namn är ogiltigt. Det får bara innehålla bokstäver.';
      }

      if (!emailRegex.test(formData.email)) {
          newErrors.email = 'E-postadressen är ogiltig. Var vänlig ange en giltig e-postadress.';
      }

      if (formData.myMessage.length > 500 || formData.myMessage.length < 1) {
          newErrors.myMessage = 'Ditt meddelande måste innehålla mellan 1 och 500 tecken. Vänligen testa igen.';
      }

      setErrors(newErrors);

      if (newErrors.myName === '' && newErrors.email === '' && newErrors.myMessage === '' ) {
        const result = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                name: formData.myName,
                email: formData.email,
                message: formData.myMessage
            })
        })

        if (result.status === 200)
            alert('Lyckades registrera användaren!')
        else
            alert('Något gick fel. Vänligen försök igen senare.')
      }

    }

      

  return (
      <section className="part-3">
          <div className="leave-message-form container">
              <div className="topic-message">
                  <h1>Leave us a message<br></br>for any information.</h1>
              </div>
              <form id="registerform" method="post" onSubmit={validateForm}>
                  <div className="form-block">
                      <div>
                          <input type="text" id="myNamestyle" name="myName" value={formData.myName} onChange={handleChange} placeholder="Name*" />
                      </div>
                      <div>
                          <input type="mail" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email*" />
                      </div>
                      <div>
                          <input id="yourMessage" name="myMessage"  value={formData.myMessage} onChange={handleChange} placeholder="Your Message*" />
                      </div>
                      <button className="yellow-button" type="submit">Send Message<i className="fa-solid fa-arrow-up-right"></i></button>
                      <div className="error-message">
                        {errors.myName && <p className="error">{errors.myName}</p>}
                        {errors.email && <p className="error">{errors.email}</p>}
                        {errors.myMessage && <p className="error">{errors.myMessage}</p>}
                      </div>
                  </div>
              </form>
          </div>
      </section>
  );
}

export default ContactsPartThreeNew;
