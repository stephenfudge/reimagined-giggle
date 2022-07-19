import React, { useState } from 'react';
import './style.css';

// Here we import a helper function that will check if the email is valid
import { checkPassword, validateEmail } from '../../utils/helpers';

function Form() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  
  // TODO: Create a password variable and a function "setPassword" using useState
  const [password, setPassword] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    // TODO: Add an else statement to the end that will set the password to the value of 'inputValue'

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    }else {
      setPassword(inputValue);
  }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !userName) {
      setErrorMessage('Email or username is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
    if (!checkPassword(password)) {
      setErrorMessage(
        `Choose a more secure password for the account: ${userName}`
      );
      return;
    }
    alert(`Hello ${userName}`);
    // If successful, we want to clear out the input after registration.
    setUserName('');
    // TODO: Set the password back to an empty string after the user clicks submit
    setPassword('');
    setEmail('');
    setErrorMessage('');
   
  };

  return (
    <div>
        <div class="field">
  <label class="label">Name</label>
  <div class="control">
    <input class="input" type="text" placeholder="e.g Alex Smith" />
  </div>
</div>

<div class="field">
  <label class="label">Email</label>
  <div class="control">
    <input class="input" type="email" placeholder="e.g. alexsmith@gmail.com" />
  </div>
</div>

<div class="field">
  <label class="label">Message</label>
  <div class="control">
    <input class="input" type="message" placeholder="Put your message here" />
  </div>
</div>
       <form className="form">
         <input
          value={userName}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Please Enter Your Name"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        {/* TODO Add another input field with a value, name, type, and placeholder of "password" */}
        <input 
          value={password}
          name="password"
          onChange={handleInputChange}
          type="password"
          placeholder="password"
        />
        {/* TODO Add a `onChange` attribute with a value of `handleInputChange` */}
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}