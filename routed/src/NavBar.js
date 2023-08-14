import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav className="NavBar">
            <Link to="/">
                VendingMachine
            </Link>
            <Link to="Candy">
                Candy
            </Link>
            <Link to="Chips">
                Chips
            </Link>
            <Link to="Soda">
                Soda
            </Link>
            <Link to="Soup">
                Soup
            </Link>
        </nav>
    );
}

export default NavBar;