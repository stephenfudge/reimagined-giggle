import {useRef } from 'react';
import emailjs from '@emailjs/browser';

// import '../pages/Contact.css';



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
        <form class="ui form" ref={form} onSubmit={sendEmail}>
  <div class="field">
    <label> Name</label>
    <input type="text" name="name" placeholder="John Doe" />
  </div>
  <div class="field">
    <label>Email</label>
    <input type="text" name="email" placeholder="name@email.com" />
  </div>
  <div class="field">
    <label>Text</label>
    <textarea></textarea>
  </div>
  
  <button class="ui button" type="submit">Submit</button>
</form>


     );
};
  

export default Contact;