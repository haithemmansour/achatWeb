import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth } from '../../firebase/firebase.utils';

import './contact.styles.scss';

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName:'',  
      email: '',
      phone: '',
      message : ''
    };
  }


  handleSubmit = async event => {
    event.preventDefault();

    const { displayName , email } = this.state;

    try {
      await auth.sendEmailVerification( displayName, email );
      this.setState({ displayName: '', email: '' });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };
  render() {
    const { displayName, email, phone, message } = this.state;
    return (
      <div className='contact-form'>
        <div className='title'>
          <span>CONTACT</span>
        </div>
        <div className ='proposition'>
            <span>Si vous ne trouvez as votre bonheur ou vous avez une propsition, contactez-nous !</span>
        </div>
        
        <form onSubmit={this.handleSubmit}>
          <div>
          <FormInput
          type='text'
          name='displayName'
          value={displayName}
          onChange={this.handleChange}
          label='Prénom'
          required
          />
          <FormInput
          type='email'
          name='email'
          value={email}
          onChange={this.handleChange}
          label='E-mail'
          required
          />
          <FormInput
            name='phone'
            type='tel'
            value={phone}
            handleChange={this.handleChange}
            label='Téléphone'
            required
          />
          
            <textarea
              className='message'
              name='message'
              value={message}
              handleChange={this.handleChange}
              onChange={this.handleChange}
              required
              placeholder="Rédigez votre message ici ..."
              />
         </div> 

              
          <div className='buttons'>
            <CustomButton type='submit'> Envoyer </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default Contact;