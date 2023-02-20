import React from 'react';
import { useState, useEffect, useRef } from 'react';

function Question({ question, totalQuestions, currentQuestion, setAnswer }) {
    const[selectedOption, setSelectedOption] = useState(null);

    const timer = useRef(null);
    const progressBar = useRef(null);

    function gotoNextQuestion() {
        if (timer.current) {
            clearTimeout(timer.current);
        };
    }

    useEffect(() => {
        
        progressBar.current.classList.remove("active");

        setTimeout(() => progressBar.current.classList.add("active"), 10)

        timer.current = setTimeout(() => setAnswer(selectedOption), 10 * 1000); // seconds
        setSelectedOption(null)
        return gotoNextQuestion;
    }, [question]);

    console.log(selectedOption)

    return (
        <div className="question">
            <div className="progress-bar active" ref={progressBar}></div>
            <div className="question-count">
                <b>{currentQuestion +1}</b>
                of 
                <b>{totalQuestions}</b>
            </div>
            <div className="main">
                <div className="title">
                    <span>Question :</span>
                    <p>{question.title}</p>
                </div>
                <div className="options">
                    {
                        question.options.map((option, index) => {
                            return (
                                <div className={index == selectedOption ? "option active" : "option"}
                                    key={index}
                                    onClick={() => setSelectedOption(index)}
                                    >
                                    {option}
                                </div>
                            );
                        })
                    }
                </div>
            </div>
            <div className="control">
                <button onClick={() => setAnswer(selectedOption)}>Next</button>
            </div>
        </div>
    );
};

export default Question;