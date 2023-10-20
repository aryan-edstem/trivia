import React, { useState } from "react";
import { useEffect } from "react";
import data from "./data";
import Results from "./Results";

const Questions = () => {
  const [questions,setQuestions]=useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [color,setColor]=useState('');
  const [qcount, setqcount] = useState(0);
  const [score, setScore] = useState(0);
  const [buttonList, setButtonList] = useState([])

  useEffect (()=> {
    handleViewClick();
  },[]);
  const [resultStatus, setResultStatus] = useState(false);
  const handleViewClick = async () => {
          try {
            const response = await fetch(`https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple`);
            const fetchedData = await response.json();
            setQuestions(fetchedData.results);
            setButtonList([questions[qcount].incorrect_answers[1],questions[qcount].incorrect_answers[0],questions[qcount].incorrect_answers[2],questions[qcount].correct_answer])
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
    setButtonList([questions[qcount].incorrect_answers[1],questions[qcount].incorrect_answers[0],questions[qcount].incorrect_answers[2],questions[qcount].correct_answer])

  }


  const handleCheck = (e) =>{
    setSelectedAnswer(e.currentTarget.value);
    console.log(e.currentTarget.value)
    if(e.currentTarget.value===questions[qcount].correct_answer){
      console.log(true)
      setColor("correct")
      setScore(score+1)
    }    
    else  
      console.log(false)
  }  

    if(resultStatus){
      return(
    <Results score={score} data={questions}/>
      )
    }

    if(questions && buttonList){
            return(
            <div>
            <h1>{qcount+1}. {questions[qcount].question}</h1>
            <button onClick={handleCheck} className={`${selectedAnswer === questions[qcount].incorrect_answers[0] ? "selected" : ''} `}  value={questions[qcount].incorrect_answers[0]}>{buttonList.length && buttonList[0]}</button>
            <button onClick={handleCheck} className={`${selectedAnswer === questions[qcount].incorrect_answers[1] ? "selected" : ''} `} value={questions[qcount].incorrect_answers[1]}>{buttonList.length && buttonList[1]}</button>
            <button onClick={handleCheck} className={color} value={questions[qcount].correct_answer}>{buttonList.length && buttonList[2]}</button>
            <button onClick={handleCheck} className={`${selectedAnswer === questions[qcount].incorrect_answers[2] ? "selected" : ''} `} value={questions[qcount].incorrect_answers[2]}>{buttonList.length && buttonList[3]}</button>
              <div>
                <button onClick={handleNext}> Next question</button>
              </div>
            </div>
            )
            }
}

export default Questions