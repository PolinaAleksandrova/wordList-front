import axios from 'axios';
import { useState } from 'react';
import React from 'react';
import { useForm } from 'react-hook-form';
import "./AuthForm.css";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function RegisterForm() {
  const { t } = useTranslation();
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
      const response = await axios.post('http://localhost:8080/auth/register', formData);
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
            <h2>{t('registerForm.title')}</h2>
            <span>{t('registerForm.subtitle')}</span>
    <form id='form' className='flex flex-col' onSubmit={handleSubmit}>
    <input type="text" {...register("firstname")} value={formData.firstname} onChange={handleChange} placeholder={t('registerForm.firstname')} />
    <input type="text" {...register("lastname")} value={formData.lastname} onChange={handleChange} placeholder={t('registerForm.lastname')} />
      <input type="email" {...register("email")} value={formData.email} onChange={handleChange} placeholder={t('registerForm.email')} />
                    <input type="password" {...register("password")} value={formData.password} onChange={handleChange} placeholder={t('registerForm.password')} />
                   
                    {errors.email?.type === "required" && "Mobile Number is required"}
                    {errors.password?.type === "maxLength" && "Max Length Exceed"}
                    <button type="submit">{t('registerForm.register')}</button>
                    <Link to='login'>
                    <span className="navForms2">{t('registerForm.haveAccount')}</span></Link>
    </form>
    </div>
    </div>
    </section>
  );
}


export default RegisterForm;