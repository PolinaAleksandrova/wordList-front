import {useState} from "react";
import React from "react";
import Navbar from "../Quiz/Navbar"
import QuizScreen from "../Quiz/QuizScreen";
import JoinScreen from "../Quiz/JoinScreen" ;

function QuizPage(){
    const [isQuizStarted, setIsQuizStarted] = useState(false);
    return (
        <>
        <Navbar/>
        <div className="quiz-container">
        {
            isQuizStarted ? (
                <QuizScreen retry ={()=>setIsQuizStarted(false)}/>
            ):(
                <JoinScreen start ={()=>setIsQuizStarted(true)}/>
            )
        }
        </div>
        </>
    );
}

export default QuizPage;