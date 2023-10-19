import React,{useState} from "react";
import Questions from "./Questions";
import Results from "./Results";

const Home = () => {
    const [isStarted,setIsStarted] = useState(false)
    const handleStart = ()=> {
        setIsStarted(true)
    }
    if(isStarted){
        return <Questions />
            
    }
    return(
        <div>
        <h1>Let's Check your Knowledge</h1>
        <button onClick={handleStart}>Let's Start</button>

        </div>
    )
}

export default Home