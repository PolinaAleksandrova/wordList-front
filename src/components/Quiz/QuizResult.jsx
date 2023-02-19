import React from "react";

function QuestionResult({result, retry}) {
    return(
        <div className="result-screen">
            <h2>Result: {result.percentage}%</h2>
            <p> Selected {result.correct} correct option outof {result.total} question</p>
            <button onClick={retry}>Retry</button>
        </div>
    )
}

export default QuestionResult;