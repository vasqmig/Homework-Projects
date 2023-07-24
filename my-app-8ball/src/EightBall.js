import React, {useState} from "react";

import "./EightBall.css";
import defaultAnswers from "./answers.json";
import { choice } from "./random";


function EightBall(){
    const [answer, setAnswer] = useState({
        msg : "Think of Question",
        color : "black",
    });
    function handleClick(evt) {
        setAnswer(choice(answer));
    }
    return (
        <div className="EightBall" onClick={handleClick} style={{background: answer.color}}>
        <b>{answer.msg}</b>    
        </div>
    );
}

  export default EightBall;