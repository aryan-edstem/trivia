import React,{useState} from "react";
import Questions from "./Questions";


const Home = () => {
    const [isStarted,setIsStarted] = useState(false)
    const [level,setLevel] = useState("easy")
    const handleStart = ()=> {
        setIsStarted(true)
    }

    const handleChange = (e) => {
        setLevel(e.target.value)
    }

    if(isStarted){
        return <Questions level={level}/>
            
    }

    return(
        <div>
            <h1>Let's Check your Knowledge</h1>
            <label>Difficulty Level:
            <select onChange={handleChange}>Difficulty Level:
                <option value="easy" selected>Easy</option>
                <option value="medium" >Medium</option>
                <option value="hard">Hard</option>
            </select>
            </label>
            <button onClick={handleStart}><p>Let's Start</p></button>
        </div>
    )
}

export default Home