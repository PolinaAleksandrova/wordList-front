import React from "react";
import { useState } from "react";
import Navbar from "../Quiz/Navbar";
import QuizScreen from "../Quiz/QuizScreen";
import JoinScreen from "../Quiz/JoinScreen";

function QuizPage() {
  
  const [isQuizStarted, setQuizStarted] = useState()

  return(
    <div>
      <Navbar />
      <div className="quiz-container">
      {
        isQuizStarted ?  <QuizScreen retry={()=>setQuizStarted(false)} /> :
        <JoinScreen start={()=> setQuizStarted(true)}/>
      }
       

      </div>
    </div>
  )

}

export default QuizPage; 