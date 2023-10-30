import React,{useState} from "react";
import Questions from "./Questions";


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
        <button onClick={handleStart}><p>Let's Start</p></button>
        </div>
    )
}

export default Home