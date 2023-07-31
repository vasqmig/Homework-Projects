import React, {useState} from "react";

import "./EightBall.css";
import answers from "./answers";
import { choice } from "./random";


function EightBall(){
    const [answers, setAnswer] = useState({
        msg : "Think of Question",
        color : "black",
    });
    function handleClick(evt) {
        setAnswer(choice(answers));
    }
    return (
        <div className="EightBall" onClick={handleClick} style={{background: answers[0].color}}>
        {/* <b>{answer.msg}</b>     */}
        </div>
    );
}

  export default EightBall;