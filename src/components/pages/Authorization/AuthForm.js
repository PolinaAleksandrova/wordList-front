import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import "./AuthForm.css"
import { Redirect } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function AuthForm() {
  const { t } = useTranslation();
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
            <h2>{t('authForm.title')}</h2>
            <span>{t('authForm.subtitle')}</span>
    <form id='form' className='flex flex-col' onSubmit={handleSubmit}>
      <input type="email" {...register("email")} value={formData.email} onChange={handleChange} placeholder={t('authForm.email')} />
                    <input type="password" {...register("password")} value={formData.password} onChange={handleChange} placeholder={t('authForm.password')} />
                   
                    {errors.email?.type === "required" && t('authForm.emailRequired')}
                    {errors.password?.type === "maxLength" && t('authForm.passwordMaxLength')}
                    <button type="submit">{t('authForm.signIn')}</button>
                    <Link to='sign-up'>
                    <span className="navForms">{t('authForm.noAccount')}</span></Link>
    
    </form>
    </div>
    </div>
    </section>
  );
}

export default AuthForm;