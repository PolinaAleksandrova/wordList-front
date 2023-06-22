import React from 'react';
import '../../mainCourses/style.css';
import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation();
  return (
    <div className="MainCourses">
    <div className="welcome">
      <h1 className="welcome-title">Доступні тести</h1>
      <p className="welcome-description">Вибрані тести для проходження</p>
    </div>
    <div className="cardGrid">
        <div className="cardMain">
          <div className="cardMain-content">
            <h2 className="cardMain-title">{t('test1.title')}</h2>
            <p className="cardMain-body">{t('test1.description')}</p>
            <a href="/quizPage" className="button">Learn More</a>
          </div>
        </div>
        <div className="cardMain">
          <div className="cardMain-content">
            <h2 className="cardMain-title">{t('test2.title')}</h2>
            <p className="cardMain-body">{t('test2.description')}</p>
            <a href="/flashCards" className="button">Learn More</a>
          </div>
        </div>
        <div className="cardMain">
          <div className="cardMain-content">
            <h2 className="cardMain-title">{t('test3.title')}</h2>
            <p className="cardMain-body">{t('test3.description')}</p>
            <a href="/test1" className="button">Learn More</a>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Home;
