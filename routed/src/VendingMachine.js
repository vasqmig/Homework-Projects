import React from "react";
import { Link } from "react-router-dom";
import image from ".//vendiMachine.gif"


function VendingMachine() {
    return(
        <div style={{backgroundImage:`url(${image})`}}>
            <h1>Pick Wisely</h1>
            <p> Selection
            <Link to="/Soda"> Soda </Link>
            <Link to = "Chips"> Chips </Link>
            <Link to ="Candy"> Candy </Link>
            <Link to = "Soup"> Soup </Link>
            </p>
        </div>
    );
}

export default VendingMachine;