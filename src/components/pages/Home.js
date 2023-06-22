import React from 'react';
import '../pages/mainCourses/style.css';
import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation();
  return (
    <div className="MainCourses">
    <div className="welcome">
    <h1 className="welcome-title">{t('welcome.title')}</h1>
    <p className="welcome-description">{t('welcome.description')}</p>
    </div>
    <div className="cardGrid">
        <div className="cardMain">
          <div className="cardMain-content">
            <h2 className="cardMain-title">{t('course.buildingBlocks.title')}</h2>
            <p className="cardMain-body">{t('course.buildingBlocks.description')}</p>
            <a href="/login" className="button">Learn More</a>
          </div>
        </div>
        <div className="cardMain">
          <div className="cardMain-content">
            <h2 className="cardMain-title">{t('course.communication.title')}</h2>
            <p className="cardMain-body">{t('course.communication.description')}</p>
            <a href="/login" className="button">Learn More</a>
          </div>
        </div>
        <div className="cardMain">
          <div className="cardMain-content">
            <h2 className="cardMain-title">{t('course.ielts.title')}</h2>
            <p className="cardMain-body">{t('course.ielts.description')}</p>
            <a href="/login" className="button">Learn More</a>
          </div>
        </div>
        <div className="cardMain">
          <div className="cardMain-content">
            <h2 className="cardMain-title">{t('course.travelers.title')}</h2>
            <p className="cardMain-body">{t('course.travelers.description')}</p>
            <a href="/login" className="button">Learn More</a>
          </div>
        </div>
        <div className="cardMain">
          <div className="cardMain-content">
            <h2 className="cardMain-title">{t('course.conversation.title')}</h2>
            <p className="cardMain-body">{t('course.conversation.description')}</p>
            <a href="/login" className="button">Learn More</a>
          </div>
        </div>
        <div className="cardMain">
          <div className="cardMain-content">
            <h2 className="cardMain-title">{t('course.writing.title')}</h2>
            <p className="cardMain-body">{t('course.writing.description')}</p>
            <a href="/login" className="button">Learn More</a>
          </div>
        </div>
        <div className="cardMain">
          <div className="cardMain-content">
            <h2 className="cardMain-title">{t('course.speech.title')}</h2>
            <p className="cardMain-body">{t('course.speech.description')}</p>
            <a href="/login" className="button">Learn More</a>
          </div>
        </div>
        <div className="cardMain">
          <div className="cardMain-content">
            <h2 className="cardMain-title">{t('course.literature.title')}</h2>
            <p className="cardMain-body">{t('course.literature.description')}</p>
            <a href="/login" className="button">Learn More</a>
          </div>
        </div>
        <div className="footer">
        © 2023 Всі права захищені
      </div>
      </div>
    </div>
    
  );
}

export default Home;
