import {useRef } from 'react';
import emailjs from '@emailjs/browser';

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
      <div className='form-container'>
        <form ref={form} onSubmit={sendEmail}>
          <ul>
        <li>    
        <label>Name</label>
        <input type="text" name="user_name" />
        </li>
        {/* <br /> */}
        <li>
        <label>Email</label>
        <input type="email" name="user_email" />
        </li>
        {/* < br/> */}
        <li>
          <label>Message</label>
         <textarea name="message" />
                {/* <br /> */}
        </li>
        <li>
        <input id="submit-button" type="submit" value="SUBMIT" />
        </li>
         </ul>
      </form>
     </div>
    );
  };
    

export default Contact;