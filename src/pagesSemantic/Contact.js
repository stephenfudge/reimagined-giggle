import {useRef } from 'react';
import emailjs from '@emailjs/browser';

// import '../pages/Contact.css';

import './Contact.css';


const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_ub0s3l9', 'template_2k96jkk', form.current, 'S8toVAtI8-CrPQEjy')
        .then((result) => {
            console.log(result.text);
            window.location.reload();
        }, (error) => {
            console.log(error.text);
        });
    };



    return( 
      <div className='contactform ui container'>
        <form className="ui form color:pink" ref={form} onSubmit={sendEmail}>
  <div className="eight wide field">
    <label><span className='contact-text'> Name</span></label>
    <input type="text" name="name" placeholder="John Doe" />
  </div>
  <div className="eight wide field">
    <label><span className='contact-text'>Email</span></label>
    <input type="text" name="email" placeholder="name@email.com" />
  </div>
  <div className="eight wide field">
    <label><span className='contact-text'>Text</span></label>
    <textarea></textarea>
  </div>
  
  <button className="ui button" type="submit">Submit</button>
</form>
</div>

     );
};
  

export default Contact;