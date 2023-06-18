import React from 'react';
import '../pages/mainCourses/style.css';

function Home() {
  
  return (
    <div className="MainCourses">
    <div className="welcome">
      <h1 className="welcome-title">Ласкаво просимо!</h1>
      <p className="welcome-description">Виберіть доступні курси для вивчення лексики англійської мови</p>
    </div>
    <div className="cardGrid">
        <div className="cardMain">
          <div className="cardMain-content">
            <h2 className="cardMain-title">Building Blocks</h2>
            <p className="cardMain-body">Інтенсивний курс, призначений для початківців, щоб опанувати основи англійської мови та розвинути навички</p>
            <a href="/login" className="button">Learn More</a>
          </div>
        </div>
        <div className="cardMain">
          <div className="cardMain-content">
            <h2 className="cardMain-title">Effective Communication</h2>
            <p className="cardMain-body">Курс, розроблений для професіоналів, мета якого навчити студентів використовувати англійську мову ефективно у діловому середовищі</p>
            <a href="/login" className="button">Learn More</a>
          </div>
        </div>
        <div className="cardMain">
          <div className="cardMain-content">
            <h2 className="cardMain-title">"IELTS" Exam Preparation</h2>
            <p className="cardMain-body">Підготовчий курс, який допомагає студентам освоїти необхідні навички для успішного складання іспиту IELTS</p>
            <a href="/login" className="button">Learn More</a>
          </div>
        </div>
        <div className="cardMain">
          <div className="cardMain-content">
            <h2 className="cardMain-title">English for Travelers</h2>
            <p className="cardMain-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugait rem facilis.</p>
            <a href="/login" className="button">Learn More</a>
          </div>
        </div>
        <div className="cardMain">
          <div className="cardMain-content">
            <h2 className="cardMain-title">Advanced Conversation</h2>
            <p className="cardMain-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugait rem facilis.</p>
            <a href="/login" className="button">Learn More</a>
          </div>
        </div>
        <div className="cardMain">
          <div className="cardMain-content">
            <h2 className="cardMain-title">Academic Writing</h2>
            <p className="cardMain-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugait rem facilis.</p>
            <a href="/login" className="button">Learn More</a>
          </div>
        </div>
        <div className="cardMain">
          <div className="cardMain-content">
            <h2 className="cardMain-title">Clear Speech</h2>
            <p className="cardMain-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugait rem facilis.</p>
            <a href="/login" className="button">Learn More</a>
          </div>
        </div>
        <div className="cardMain">
          <div className="cardMain-content">
            <h2 className="cardMain-title">Exploring Contemporary</h2>
            <p className="cardMain-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugait rem facilis.</p>
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
