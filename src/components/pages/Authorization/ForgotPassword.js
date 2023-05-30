import axios from 'axios';
import { useState } from 'react';
import React from 'react';
import { useForm } from 'react-hook-form';
import "./AuthForm.css";
import { Link } from 'react-router-dom';
function RegisterForm() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  });

  const handleChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value});
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/auth/?', formData);
      document.cookie = `token=${response.data.token}`;
      window.location.href = '/';
    } catch (error) {
      console.error(error);
    }
  }
  const { passwordForm,  watch, formState: { errors } } = useForm()
  const onSubmit = data => console.log(data);
  return (
    <section>
    <div className="passwordForm">
            <div className="col-1">
                <h2>Forgot Password?</h2>
                <span>Enter your email and we'll send you intructions to reset your password</span>
    <form id='form' className='flex flex-col' onSubmit={handleSubmit}>
      
                   
                    {errors.email?.type === "required" && "email is required"}
            
                    <button type="submit">Send Link Notification</button>
                    <Link to='login'>
                    <span className="navForms2">Back to login</span></Link>
    </form>
    </div>
    </div>
    </section>
  );
}


export default RegisterForm;