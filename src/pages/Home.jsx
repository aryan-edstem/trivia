import React,{useState} from "react";
import Questions from "./Questions";


const Home = () => {
    const [isStarted,setIsStarted] = useState(false)
    const [level,setLevel] = useState("easy")
    const [topic,setTopic]= useState("9")
    const handleStart = ()=> {
        setIsStarted(true)
    }

    const handleLevel = (e) => {
        setLevel(e.target.value)
    }

    const handleTopic = (e) => {
        setTopic(e.target.value)
    }

    if(isStarted){
        return <Questions level={level} topic={topic}/>
            
    }

    return(
        <div>
            <h1>Let's Check your Knowledge</h1>
            <label>Difficulty Level: 
            <select onChange={handleLevel}>Difficulty Level:
                <option value="easy" selected>Easy</option>
                <option value="medium" >Medium</option>
                <option value="hard">Hard</option>
            </select>
            </label><br /> <br />
            <label>Topic: 
            <select onChange={handleTopic}>Topic
                <option value="9" selected>General Knowledge</option>
                <option value="28" >Vehicles</option>
                <option value="27">Animals</option>
                <option value="26" >Celebrities</option>
                <option value="25">Art</option>
                <option value="24" >Politics</option>
                <option value="23">History</option>
            </select>
            </label><br /> <br />
            <button onClick={handleStart}><p>Let's Start</p></button>
        </div>
    )
}

export default Home