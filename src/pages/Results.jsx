import React from "react";
import { useState } from "react";
import Questions from "./Questions";

const Results = (props) => {
    const {score,level}=props;
    const [difficulty, setDifficulty] = useState(level)
    const [again, setAgain] = useState(false)

    const handleAgain = () => {
        setAgain(true);
    }

    if(again){
        return( 
        <Questions level={difficulty}/>
        )
        }

    return(
        <div className="results">
            <h3>Total No.of Questions: 10</h3>
            <h3>Correct: {score}</h3>
            <h3>Incorrect/Not Attempted: {10-score} </h3>
            <button onClick={handleAgain}><p>Play Again</p></button>
        </div>
    )
}

export default Results