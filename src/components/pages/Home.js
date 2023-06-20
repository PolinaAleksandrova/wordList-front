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
            <p className="cardMain-body">Практичний курс, який допомагає студентам освоїти корисні фрази, словник та навички для подорожей англійською мовою</p>
            <a href="/login" className="button">Learn More</a>
          </div>
        </div>
        <div className="cardMain">
          <div className="cardMain-content">
            <h2 className="cardMain-title">Advanced Conversation</h2>
            <p className="cardMain-body">Розширений курс для студентів, які вже володіють англійською мовою на середньому рівні, та який допомагає їм розвинути свої розмовні навички</p>
            <a href="/login" className="button">Learn More</a>
          </div>
        </div>
        <div className="cardMain">
          <div className="cardMain-content">
            <h2 className="cardMain-title">Academic Writing</h2>
            <p className="cardMain-body">Курс, який розвиває навички академічного листа, необхідні для успішної роботи у навчальному середовищі, включаючи написання есе, рефератів та дослідницьких статей</p>
            <a href="/login" className="button">Learn More</a>
          </div>
        </div>
        <div className="cardMain">
          <div className="cardMain-content">
            <h2 className="cardMain-title">Clear Speech</h2>
            <p className="cardMain-body">Інтенсивний курс з корекції вимови, який допомагає студентам освоїти звуки англійської мови, інтонацію та ритм</p>
            <a href="/login" className="button">Learn More</a>
          </div>
        </div>
        <div className="cardMain">
          <div className="cardMain-content">
            <h2 className="cardMain-title">Exploring Contemporary</h2>
            <p className="cardMain-body">Курс, який пропонує захоплююче занурення в англійську літературу, включаючи читання та аналіз класичних творів</p>
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
