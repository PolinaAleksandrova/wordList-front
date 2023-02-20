import React from "react";
import { useState } from "react";
import QuestionList from "../Quiz/questions.json";
import Question from "../Quiz/Question";
import QuizResult from "../Quiz/QuizResult";
import "../../index.css"

function QuizScreen({ retry }) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [markedAnswers, setMarkedAnswers] = useState(new Array(QuestionList.length));
    const isQuestionEnd = currentQuestionIndex === QuestionList.length;

    function calculateResult() {
        console.log({ markedAnswers });
        let correct = 0;
        QuestionList.forEach((question, index) => {
            if (question.correctOptionIndex == markedAnswers[index]) {
                correct++;
            }
        });
        return {
            total: QuestionList.length,
            correct: correct,
            percentage: Math.round((correct / QuestionList.length) * 100)
        };
    }

    console.log(currentQuestionIndex)

    return (
        <div classsName="quiz-screen">
            {
                isQuestionEnd ? (
                    <QuizResult
                        result={calculateResult()}
                        retry={retry}
                    />
                ) : (
                    <Question question={QuestionList[currentQuestionIndex]}
                        totalQuestions={QuestionList.length} 
                        currentQuestion={currentQuestionIndex}
                        setAnswer={(index) => {
                            setMarkedAnswers((arr) => {
                                let newArr = [...arr];
                                newArr[currentQuestionIndex] = index;
                                return newArr;
                            });
                            setCurrentQuestionIndex(currentQuestionIndex + 1);
                        }}
                    />
                )
            }
        </div>
    );
}

export default QuizScreen;