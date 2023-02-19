import React, { useState } from "react";
import QuestionList from "../Quiz/questions.json";
import QuestionResult from "../Quiz/QuizResult";
import Question from "../Quiz/Question";


function QuizScreen({retry}){

    const[currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [markedAnswer, setMarkedAnswers] = useState(0);
    const isQuestionEnd = currentQuestionIndex === QuestionList.length;

    function calculatedResult() {
        console.log("marked",markedAnswer);
        return{
            total :QuestionList.length,
            correct:markedAnswer,
            percentage :Math.trunc((markedAnswer/ QuestionList.length)*100)
        };
    }

    function CheckAnswer(index) {
        console.log("F ",index);
        console.log(QuestionList[currentQuestionIndex].correctOptionIndex);
        if ( index === QuestionList[currentQuestionIndex].correctOptionIndex) {
            setMarkedAnswers(markedAnswer+1)
        }
        setCurrentQuestionIndex(currentQuestionIndex+1)
    }

    return(
        <div className="quiz-screen">
        {
            isQuestionEnd ? 
                <QuestionResult 
                    result={calculatedResult()}
                    retry = {retry}
                />
             : 
                <Question
                 question={QuestionList[currentQuestionIndex]}
                 totalQuestions = {QuestionList.length}
                 currentQuestion = {currentQuestionIndex+1}
                 setAnswer = {CheckAnswer} />

        }
        </div>
    )
}

export default QuizScreen;