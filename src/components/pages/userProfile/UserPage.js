import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import '../userProfile/UserPage.css'
import { useEffect } from 'react';
import axios from 'axios';


const [userData, setUserData] = useState(null);
const Sidebar = () => {
    const { t } = useTranslation();

    const { i18n } = useTranslation()
    const [language, setLanguage] = useState('en')

    const toggleLanguage = () => {
        const newLanguage = language === 'en' ? 'ru' : 'en';
        setLanguage(newLanguage);
        i18n.changeLanguage(newLanguage);
    };
    useEffect(() => {
        const fetchUserData = async () => {
          try {
            const response = await axios.get('http://localhost:8080/users/byToken');
            setUserData(response.data);
          } catch (error) {
            console.error('Error fetching user data:', error);
          }
        };
      
        fetchUserData();
      }, []);
      
    return (
        
        <div class="sidebar">
       
            <Link to="/note">
                <i class="fas fa-list-ol"></i>
                <span>{t('sidebar.todoList')}</span>
            </Link>
            
            <Link to="/availableTests">
                <i class="fas fa-border-style"></i>
                <span>{t('sidebar.sessions')}</span>
            </Link>
            <a href="/calendar">
                <i class="fas fa-desktop"></i>
                <span>{t('sidebar.dashboard')}</span>
            </a>


            {userData ? (
      <div>
        <h2>User Data:</h2>
        <p>Username: {userData.first_name}</p>
        <p>Username: {userData.last_name}</p>
        <p>Username: {userData.email}</p>
        <p>Username: {userData.bricks}</p>

      </div>
    ) : (
      <p>Loading user data...</p>
    )}

     
        </div>

    )
}

export default Sidebar
