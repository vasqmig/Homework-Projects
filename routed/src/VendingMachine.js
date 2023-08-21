import React from "react";
import { Link } from "react-router-dom";
import image from ".//vendiMachine.gif"


function VendingMachine() {
    return(
        <div style={{backgroundImage:`url(${image})`,backgroundRepeat: "no-repeat"}}>
            <h1>Pick Wisely</h1>
            <p><b>Selection</b></p>
            <p><Link to="/Soda"> Soda </Link></p>
            <p><Link to = "Chips"> Chips </Link></p>
            <p><Link to ="Candy"> Candy </Link></p>
            <p><Link to = "Soup"> Soup </Link></p>
        </div>
    );
}

export default VendingMachine;