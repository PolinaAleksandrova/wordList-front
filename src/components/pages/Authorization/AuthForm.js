import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Redirect } from 'react-router-dom';

function AuthForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value});
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/auth/authenticate', formData);
      document.cookie = `token=${response.data.token}`;
      window.location.href = '/';
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Log In</button>
    </form>
  );
}

export default AuthForm;