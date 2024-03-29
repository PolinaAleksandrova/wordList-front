import React from 'react';
import '../../App.css';
import '../pages/mainCourses/style.css'
import { useTranslation } from 'react-i18next';

function Contact() {
  const { t } = useTranslation();
  return (
    <div className="MainCourses">
      <div className="welcome">
        <h1 className="welcome-title">{t('contact.title')}</h1>
        <p className="welcome-description">{t('contact.description')}</p>
      </div>
      <div className="cardGrid">
        {/* Карточки */}
      </div>

      <div className="contact">
        <h2 className="contact-title">{t('contact.title')}</h2>
        <div className="contact-info">
        <p>{t('contact.email')}</p>
          <p>{t('contact.phone')}</p>
          <p>{t('contact.address')}</p>
        </div>
        <div className="contact-map">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d519.5393844326368!2d36.20661419091106!3d50.04491114643283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127a6a95fdc6811%3A0x1629676ffc6c8866!2z0J_QvtCx0LXQtNC-0L3QvtGB0L3QsNGPINGD0LsuLCAyMywg0KXQsNGA0YzQutC-0LIsINCl0LDRgNGM0LrQvtCy0YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsINCj0LrRgNCw0LjQvdCwLCA2MTAwMA!5e0!3m2!1sru!2sde!4v1687069272595!5m2!1sru!2sde"
            width="600"
            height="450"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen
          />
        </div>
      </div>

      <div className="footer">
      {t('contact.footer')}
      </div>
    </div>
  );
}

export default Contact;