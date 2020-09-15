import React, { useState } from 'react'
import { Axios, firestore } from '../../firebase/firebase.utils';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './contact.styles.scss'

const Contact = () => {
  const [formData, setFormData] = useState({})

  const updateInput = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = event => {
    event.preventDefault()
    sendEmail()
    setFormData({
      name: '',
      email: '',
      message: '',
    })
  }
  const sendEmail = () => {
    Axios.post(
      'https://us-central1-achat-web.cloudfunctions.net/submit',
      formData
    )
      .then(res => {
        firestore.collection('emails').add({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: new Date(),
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    
    <div >
      <div className='title'>
        <span>CONTACT</span>
      </div>
      <div className='contact-form'>
        <div className ='proposition'>
            <span>Si vous ne trouvez pas votre bonheur ou vous avez une propsition, contactez-nous !</span>
        </div>
        <form onSubmit={handleSubmit} method="POST" >
          <div className="contact-input-form">
            <FormInput
              type="text"
              name="name"
              label="Prénom"
              onChange={updateInput}
              value={formData.name || ''}
            />

            <FormInput
              type="email"
              name="email"
              label="E-mail"
              onChange={updateInput}
              value={formData.email || ''}
            />

            <textarea
              type="text"
              name="message"
              placeholder="Rédigez votre message ici ..."
              onChange={updateInput}
              value={formData.message || ''}
              ></textarea>

            <CustomButton type='submit'> Envoyer </CustomButton>
          </div> 
        </form>
      </div>
    </div> 
    
  )
}

export default Contact;