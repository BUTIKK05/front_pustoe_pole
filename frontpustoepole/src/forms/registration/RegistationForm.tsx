import React, { useState } from 'react';
import './RegistrationForm.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  });
  const [passwordError, setPasswordError] = useState('');

  const validatePassword = (password) => {
    const minLength = 8;
    const letterCount = /[a-zA-Z]/g;
    const punctuationCount = /[.,:;!?]/g;

    if (password.length < minLength) {
      return false;
    }

    const letters = password.match(letterCount);
    if (!letters || letters.length < 2) {
      return false;
    }

    const punctuations = password.match(punctuationCount);
    if (!punctuations || punctuations.length < 1) {
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { password } = formData;

    if (!validatePassword(password)) {
      setPasswordError('Password must be at least 8 characters long, contain at least 2 letters and 1 punctuation mark.');
      return;
    }

    setPasswordError('');

    const url = 'http://localhost:8080/auth/signup';
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        window.location.href = 'front.html';
      } else {
        alert('Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className="container">
      <h1>Login to account</h1>
      <form id="registrationForm" onSubmit={handleSubmit}>
        <label htmlFor="firstname">First name:</label>
        <input type="text" id="firstname" name="firstname" value={formData.firstname} onChange={handleChange} required />
        <br />
        <label htmlFor="lastname">Last name:</label>
        <input type="text" id="lastname" name="lastname" value={formData.lastname} onChange={handleChange} required />
        <br />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
        {passwordError && <div className="error-message">{passwordError}</div>}
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
