import React from "react";
import { flushSync } from "react-dom";
import { useState,useEffect, useRef } from "react";


function Question({question,totalQuestions,currentQuestion,setAnswer}) {

const [selectedOption, setSelectedOption] = useState(null);
const [timeLeft, setTimer] = useState(10);
const progressBar = useRef(null);
const [isAct, setisAct] = useState(true)


// progressBar.current.classList.remove("active");
// setTimeout(()=>{
//     progressBar.current.classList.add("active");
// },0);

function gotoNextQuestion() {
    flushSync(()=>{
        setAnswer(selectedOption)
        setisAct(false)
        setTimer(10)
        setSelectedOption(null);
    
    });
    
}
useEffect(()=>{

    setTimeout(() => {
        setisAct(true)
    }, 0);
   
    const IntervaId = setInterval(() => {
        setTimer(timeLeft-1);
    }, 1000);
    if (timeLeft === 0) {
        // setisAct(false)
        setisAct(false)

        gotoNextQuestion();
        
    }
    return ()=> clearInterval(IntervaId);
// eslint-disable-next-line react-hooks/exhaustive-deps
},[timeLeft]);

    return(
        <div className="question">
        {/* <div className="progress-bar" ref={progressBar}></div> */}
        <div className={isAct ? "progress-bar active" : "progress-bar"}></div>
        <div className="question-count">
            <b>{currentQuestion} </b>
             of 
            <b> {totalQuestions}</b>
        </div>
        <div className="main">
            <div className="title">
                <span>Question:</span>
                <p>{question.title}</p>
            </div>
            <div className="options">
                {
                    question.option.map((option, index)=>{
                        return(
                            <div className={index === selectedOption ? "option active" : "option"}
                            key={index}
                            onClick={()=>{setSelectedOption(index)}}
                            >{option}</div>
                        )
                    })
                }
            </div>
        </div>
        <div className="control">
            <button onClick={gotoNextQuestion}>Next</button>
        </div>
        </div>

        
    )
}

export default Question;