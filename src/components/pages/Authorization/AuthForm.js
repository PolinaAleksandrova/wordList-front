import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import "./AuthForm.css"
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
  const { register,  watch, formState: { errors } } = useForm()
  const onSubmit = data => console.log(data);
  return (
    <section>
    <div className="register">
            <div className="col-1">
                <h2>Sign In</h2>
                <span>sign in and enjoy the service</span>
    <form id='form' className='flex flex-col' onSubmit={handleSubmit}>
      <input type="email" {...register("email")} value={formData.email} onChange={handleChange} placeholder='email' />
                    <input type="password" {...register("password")} value={formData.password} onChange={handleChange} placeholder='password' />
                   
                    {errors.email?.type === "required" && "Mobile Number is required"}
                    {errors.password?.type === "maxLength" && "Max Length Exceed"}
                    <button type="submit">Sign In</button>
    
    </form>
    </div>
    </div>
    </section>
  );
}

export default AuthForm;