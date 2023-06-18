import React from 'react';
import {useState} from 'react';
import '../TestLevel/testlevel.css'



const questions = [
  {
    question: '.......... to concerts?',
    options: ['Does Sally go', 'Do Sally goes', 'Do Sally go'],
    answer: 'Does Sally go',
  },
  {
    question: "She's married and she has three",
    options: ['childs', 'children', 'child'],
    answer: 'children',
  },
  {
    question: 'She is usually in bed by .......... (11.30).',
    options: ['half past eleven', 'thirty past eleven', 'eleven past thirty'],
    answer: 'half past eleven',
  },
  
  {
    question: 'We always have snow .......... January.',
    options: ['on', 'in', 'at'],
    answer: 'in',
  },
  {
    question: "There isn't .......... sugar in this coffee!",
    options: ['no', 'any', 'some'],
    answer: 'any',
  },
  {
    question: 'Is this .......... house?',
    options: ["your parent's", "your parents's", "your parents'"],
    answer: "your parents'",
  },
  {
    question: '.......... to a concert this evening. The concert .......... at 7.30.',
    options: ["I'm going, starts", 'I go, starts', "I'm going, is starting"],
    answer: "I'm going, starts"
  }
  // Добавьте остальные вопросы здесь
];

export default function Tests() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);

  const handleOptionSelect = (questionIndex, option) => {
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionIndex]: option,
    }));
  };

  const handleNextQuestion = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  };

  const handleShowResult = () => {
    setShowResult(true);
  };

  const calculateResult = () => {
    let score = 0;
    questions.forEach((question, index) => {
      if (userAnswers[index] === question.answer) {
        score++;
      }
    });
    return score;
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers({});
    setShowResult(false);
  };

  return (
    <div className="testslevel">
      {!showResult && (
        <div className='testslevel'>
          <h6>TEST C1 Advanced</h6>
          {currentQuestion < questions.length ? (
            <div className='testslevel'>
              <h6>{questions[currentQuestion].question}</h6>
              <ul>
                {questions[currentQuestion].options.map((option, index) => (
                  <li key={index}>
                    <label>
                      <input
                        type="radio"
                        value={option}
                        checked={userAnswers[currentQuestion] === option}
                        onChange={() =>
                          handleOptionSelect(currentQuestion, option)
                        }
                      />
                      {option}
                    </label>
                  </li>
                ))}
              </ul>
              <button onClick={handleNextQuestion}>Next</button>
            </div>
          ) : (
            <button onClick={handleShowResult}>Show Result</button>
          )}
        </div>
      )}

      {showResult && (
        <div>
          <h1>Result</h1>
          <p>Your English Level: {calculateResult()} out of {questions.length}</p>
          <button onClick={resetQuiz}>Restart Quiz</button>
        </div>
      )}
    </div>
  );
}