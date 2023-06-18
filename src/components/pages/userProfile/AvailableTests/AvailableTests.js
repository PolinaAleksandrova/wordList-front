import React from 'react';
import '../../mainCourses/style.css';

function Home() {
  
  return (
    <div className="MainCourses">
    <div className="welcome">
      <h1 className="welcome-title">Доступні тести</h1>
      <p className="welcome-description">Вибрані тести для проходження</p>
    </div>
    <div className="cardGrid">
        <div className="cardMain">
          <div className="cardMain-content">
            <h2 className="cardMain-title">Тест 1</h2>
            <p className="cardMain-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugait rem facilis.</p>
            <a href="/quizPage" className="button">Learn More</a>
          </div>
        </div>
        <div className="cardMain">
          <div className="cardMain-content">
            <h2 className="cardMain-title">Тест 2</h2>
            <p className="cardMain-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugait rem facilis.</p>
            <a href="/flashCards" className="button">Learn More</a>
          </div>
        </div>
        <div className="cardMain">
          <div className="cardMain-content">
            <h2 className="cardMain-title">Тест 3</h2>
            <p className="cardMain-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugait rem facilis.</p>
            <a href="/test1" className="button">Learn More</a>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Home;
