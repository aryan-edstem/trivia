import React, { useState } from "react";
import { useEffect } from "react";
import Results from "./Results";

const Questions = (props) => {
  const {level}=props;
  const [questions,setQuestions]=useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [qcount, setqcount] = useState(0);
  const [score, setScore] = useState(0);



  useEffect (()=> {
    handleViewClick();
  },[]);

  const [resultStatus, setResultStatus] = useState(false);
  
  const handleViewClick = async () => {
          try {
            const response = await fetch(`https://opentdb.com/api.php?amount=10&type=multiple&difficulty=${level}`);
            const fetchedData = await response.json();
            setQuestions(fetchedData.results);
            console.log(fetchedData.results)
          } catch (error) {
            console.error('Error fetching data:', error);
          }
      };
      
  const handleNext = () => {
    if(qcount===9){
      setResultStatus(true)
      }
    setqcount(qcount+1)
  }


  const handleCheck = (e) =>{
    setSelectedAnswer(e.currentTarget.value);
    if(e.currentTarget.value===questions[qcount].correct_answer){
      setScore(score+1)
    }    
  }  

    if(resultStatus){
      return(
    <Results score={score}/>
      )
    }

    if(questions){
            return(
            <div className="quiz">
            <h3>Score:{score}</h3>
            <h1>{questions[qcount].category}</h1>
            <h1>{questions[qcount].difficulty}</h1>
            <div className="question"><h3>{qcount+1}. {questions[qcount].question}</h3></div>
            <div className="options">

            <button onClick={handleCheck} className={`${selectedAnswer === questions[qcount].incorrect_answers[0]? (selectedAnswer === questions[qcount].correct_answer ? "correct" : "incorrect") : ""}`} value={questions[qcount].incorrect_answers[0]}>
              <p>{questions.length && questions[qcount].incorrect_answers[0]}</p>
            </button>
            <button onClick={handleCheck} className={`${selectedAnswer === questions[qcount].incorrect_answers[1] ? (selectedAnswer === questions[qcount].correct_answer ? "correct" : "incorrect") : ""}`} value={questions[qcount].incorrect_answers[1]}>
              <p>{questions.length && questions[qcount].incorrect_answers[1]}</p>
            </button>
            <button onClick={handleCheck} className={`${selectedAnswer === questions[qcount].correct_answer? (selectedAnswer === questions[qcount].correct_answer ? "correct" : "incorrect") : ""}`} value={questions[qcount].correct_answer}>
              <p>{questions.length && questions[qcount].correct_answer}</p>
            </button>
            <button onClick={handleCheck} className={`${selectedAnswer === questions[qcount].incorrect_answers[2] ? (selectedAnswer === questions[qcount].correct_answer ? "correct" : "incorrect") : ""}`} value={questions[qcount].incorrect_answers[2]}>
              <p>{questions.length && questions[qcount].incorrect_answers[2]}</p>
            </button>
            </div>
             <div className="next-question">
                <button className="next" onClick={handleNext}><p> Next question</p></button>
              </div>
            </div>
            )
            }
}

export default Questions