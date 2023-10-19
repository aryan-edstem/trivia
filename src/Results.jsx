import React from "react";
import data from './data'
import { useState } from "react";
import Questions from "./Questions";

const Results = (props) => {
    const {score}=props;
    const [again, setAgain] = useState(false)
    const handleAgain = () => {
        setAgain(true);
    }
    if(again){
        return(
    <Questions />)}
    return(
        <div>
            {data.map((item)=>{
                return(
                    <>
                    {item.question} - - {item.correct_answer}<br /><br />
                    </>
                )
            })}
            <h1>{score}</h1>
            <button onClick={handleAgain}>Play Again</button>
        </div>
    )
}

export default Results