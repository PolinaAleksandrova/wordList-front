import React from "react";

function JoinScreen({start}){
    return(
        <div className="join-screen">
        <h2>Join screen</h2>
        
        <p>CLick on button below to start the Quiz.</p>
        <button onClick={start}>start</button>
        </div>
    )
}

export default JoinScreen;