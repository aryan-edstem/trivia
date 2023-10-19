import React, { useState } from "react";
import { useEffect } from "react";
import data from "./data";
import Results from "./Results";

const Questions = () => {
  const [questions,setQuestions]=useState();
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [color,setColor]=useState('');
  const [qcount, setqcount] = useState(0);
  const [score, setScore] = useState(0)

  useEffect (()=> {
    handleViewClick();
  },[]);
  const [resultStatus, setResultStatus] = useState(false);
  const handleViewClick = async () => {
          try {
            const response = await fetch(`https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple`);
            const fetchedData = await response.json();
            setQuestions(fetchedData.results);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
      };
      
  const handleNext = () => {
    if(qcount===9){
      setResultStatus(true)
      }
    setqcount(qcount+1)
    setColor('')

  }


  const handleCheck = (e) =>{
    setSelectedAnswer(e.currentTarget.value);
    if(e.currentTarget.value===data[qcount].correct_answer){
      console.log(true)
      setColor("correct")
      setScore(score+1)
    }    
    else  
      console.log(false)
  }  

    if(resultStatus){
      return(
    <Results score={score}/>
      )
    }
    return (
      <div>
            <h1>{questions.length && questions[qcount].question}</h1>
            <button onClick={handleCheck} className={`${selectedAnswer === questions[qcount].incorrect_answers[0] ? "selected" : ''} `}  value={questions[qcount].incorrect_answers[0]}>{questions.length && questions[qcount].incorrect_answers[0]}</button>
            <button onClick={handleCheck} className={`${selectedAnswer === questions[qcount].incorrect_answers[1] ? "selected" : ''} `} value={questions[qcount].incorrect_answers[1]}>{questions.length && questions[qcount].incorrect_answers[1]}</button>
            <button onClick={handleCheck} className={color} value={questions[qcount].correct_answer}>{questions.length && questions[qcount].correct_answer}</button>
            <button onClick={handleCheck} className={`${selectedAnswer === questions[qcount].incorrect_answers[2] ? "selected" : ''} `} value={questions[qcount].incorrect_answers[2]}>{questions.length && questions[qcount].incorrect_answers[2]}</button>
              <div>
                <button onClick={handleNext}> Next question</button>
              </div>
      </div>
    )
}

export default Questions